-- CTOS Database Schema
-- Clinical Trials Operating System - Document Management & AI Assistant
-- Part 11/GCP Compliant with Audit Trails

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE user_role AS ENUM ('sponsor', 'site_monitor', 'site_coordinator', 'admin');
CREATE TYPE document_scope AS ENUM ('TMF', 'IF', 'ISF');
CREATE TYPE document_status AS ENUM ('current', 'certified', 'superseded', 'missing');
CREATE TYPE trial_stage AS ENUM ('before', 'during', 'after');
CREATE TYPE audit_action AS ENUM ('create', 'read', 'update', 'delete', 'download', 'upload', 'query_ai', 'login', 'logout');

-- ============================================
-- TABLES
-- ============================================

-- Sites Table
CREATE TABLE sites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  site_number VARCHAR(50) UNIQUE NOT NULL,
  site_name VARCHAR(255) NOT NULL,
  principal_investigator VARCHAR(255),
  address TEXT,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Profiles Table (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role user_role NOT NULL DEFAULT 'site_coordinator',
  assigned_site_id UUID REFERENCES sites(id),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Document Sections (DIA EDM Reference Model)
CREATE TABLE document_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  scope document_scope NOT NULL,
  section_number VARCHAR(20) NOT NULL,
  section_name VARCHAR(255) NOT NULL,
  subsection_number VARCHAR(20),
  subsection_name VARCHAR(255),
  artifact_type VARCHAR(255),
  stage trial_stage,
  description TEXT,
  is_required BOOLEAN DEFAULT false,
  parent_id UUID REFERENCES document_sections(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Documents Table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Classification
  scope document_scope NOT NULL,
  section_id UUID REFERENCES document_sections(id) NOT NULL,
  site_id UUID REFERENCES sites(id), -- NULL for TMF, required for ISF
  
  -- Metadata
  document_name VARCHAR(500) NOT NULL,
  document_type VARCHAR(100),
  version VARCHAR(50) NOT NULL,
  status document_status DEFAULT 'current',
  
  -- Storage
  file_path TEXT NOT NULL, -- Path in Supabase Storage
  file_size BIGINT,
  file_type VARCHAR(100),
  
  -- Certification
  is_certified BOOLEAN DEFAULT false,
  certified_by VARCHAR(255),
  certified_date DATE,
  
  -- Relationships
  supersedes_id UUID REFERENCES documents(id),
  
  -- Audit
  uploaded_by UUID REFERENCES profiles(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Full text search
  search_vector tsvector
);

-- Community Questions
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID REFERENCES profiles(id) NOT NULL,
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[],
  view_count INTEGER DEFAULT 0,
  vote_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community Answers
CREATE TABLE answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES profiles(id) NOT NULL,
  content TEXT NOT NULL,
  
  -- AI Citations
  is_ai_generated BOOLEAN DEFAULT false,
  citations JSONB, -- Array of {document_id, page, excerpt}
  
  vote_count INTEGER DEFAULT 0,
  is_accepted BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit Log (Part 11 Compliance)
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  action audit_action NOT NULL,
  resource_type VARCHAR(100), -- 'document', 'question', 'answer', etc.
  resource_id UUID,
  details JSONB, -- Additional context (query text, filters, etc.)
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES
-- ============================================

-- Profiles
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_site ON profiles(assigned_site_id);

-- Documents
CREATE INDEX idx_documents_scope ON documents(scope);
CREATE INDEX idx_documents_section ON documents(section_id);
CREATE INDEX idx_documents_site ON documents(site_id);
CREATE INDEX idx_documents_status ON documents(status);
CREATE INDEX idx_documents_uploaded_by ON documents(uploaded_by);
CREATE INDEX idx_documents_created_at ON documents(created_at DESC);
CREATE INDEX idx_documents_search ON documents USING gin(search_vector);

-- Questions
CREATE INDEX idx_questions_author ON questions(author_id);
CREATE INDEX idx_questions_created_at ON questions(created_at DESC);
CREATE INDEX idx_questions_tags ON questions USING gin(tags);

-- Answers
CREATE INDEX idx_answers_question ON answers(question_id);
CREATE INDEX idx_answers_author ON answers(author_id);

-- Audit Log
CREATE INDEX idx_audit_user ON audit_log(user_id);
CREATE INDEX idx_audit_action ON audit_log(action);
CREATE INDEX idx_audit_resource ON audit_log(resource_type, resource_id);
CREATE INDEX idx_audit_created_at ON audit_log(created_at DESC);

-- ============================================
-- TRIGGERS
-- ============================================

-- Update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_sites_updated_at BEFORE UPDATE ON sites
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_questions_updated_at BEFORE UPDATE ON questions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_answers_updated_at BEFORE UPDATE ON answers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Update search vector for documents
CREATE OR REPLACE FUNCTION update_document_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.document_name, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.document_type, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.version, '')), 'C');
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER document_search_vector_update BEFORE INSERT OR UPDATE ON documents
  FOR EACH ROW EXECUTE FUNCTION update_document_search_vector();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read all profiles, update own
CREATE POLICY "Users can view all profiles"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Sites: All authenticated users can read sites
CREATE POLICY "All users can view sites"
  ON sites FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Document Sections: All authenticated users can read
CREATE POLICY "All users can view document sections"
  ON document_sections FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Documents: Complex RLS based on role
-- Site coordinators: Only ISF docs for their assigned site
CREATE POLICY "Site coordinators can view their ISF documents"
  ON documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'site_coordinator'
      AND documents.scope = 'ISF'
      AND documents.site_id = profiles.assigned_site_id
    )
  );

-- Site monitors: All docs for their assigned sites
CREATE POLICY "Site monitors can view assigned site documents"
  ON documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'site_monitor'
      AND documents.site_id = profiles.assigned_site_id
    )
  );

-- Sponsors and admins: All documents
CREATE POLICY "Sponsors and admins can view all documents"
  ON documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('sponsor', 'admin')
    )
  );

-- Document insert: Only for authenticated users
CREATE POLICY "Authenticated users can create documents"
  ON documents FOR INSERT
  WITH CHECK (auth.uid() = uploaded_by);

-- Questions & Answers: All authenticated users can read and create
CREATE POLICY "All users can view questions"
  ON questions FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create questions"
  ON questions FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own questions"
  ON questions FOR UPDATE
  USING (auth.uid() = author_id);

CREATE POLICY "All users can view answers"
  ON answers FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create answers"
  ON answers FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own answers"
  ON answers FOR UPDATE
  USING (auth.uid() = author_id);

-- Audit Log: Insert only, users can read their own logs
CREATE POLICY "Users can view own audit logs"
  ON audit_log FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "System can insert audit logs"
  ON audit_log FOR INSERT
  WITH CHECK (true);

-- ============================================
-- STORAGE BUCKETS
-- ============================================

-- Create documents storage bucket (this would be done via Supabase dashboard or CLI)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', false);

-- Storage RLS policies would be added via dashboard

-- ============================================
-- SEED DATA: DIA EDM Reference Model Sections
-- ============================================

-- TMF Sections (Trial Master File)
INSERT INTO document_sections (scope, section_number, section_name, stage, is_required) VALUES
('TMF', '01', 'Trial Management', 'before', true),
('TMF', '02', 'Central Trial Documents', 'before', true),
('TMF', '03', 'Regulatory Authorities', 'before', true),
('TMF', '04', 'Ethics Committees/Institutional Review Boards', 'before', true),
('TMF', '05', 'Site Management', 'during', true),
('TMF', '06', 'Investigational Product', 'during', true),
('TMF', '07', 'Safety Reporting', 'during', true),
('TMF', '08', 'Central Lab/ECG/Imaging', 'during', false),
('TMF', '09', 'Data Management', 'during', true),
('TMF', '10', 'Statistics', 'after', true),
('TMF', '11', 'Final Trial Documentation', 'after', true);

-- TMF Subsections (sample - Section 01)
INSERT INTO document_sections (scope, section_number, subsection_number, section_name, subsection_name, artifact_type, stage, parent_id) VALUES
('TMF', '01', '01.01', 'Trial Management', 'Trial Management Plan', 'Plan', 'before', (SELECT id FROM document_sections WHERE section_number = '01' LIMIT 1)),
('TMF', '01', '01.02', 'Trial Management', 'Trial Initiation', 'Meeting Minutes', 'before', (SELECT id FROM document_sections WHERE section_number = '01' LIMIT 1)),
('TMF', '01', '01.03', 'Trial Management', 'Monitoring Plan', 'Plan', 'before', (SELECT id FROM document_sections WHERE section_number = '01' LIMIT 1)),
('TMF', '01', '01.04', 'Trial Management', 'Communication Plan', 'Plan', 'before', (SELECT id FROM document_sections WHERE section_number = '01' LIMIT 1)),
('TMF', '01', '01.05', 'Trial Management', 'Trial Team Training', 'Training Records', 'before', (SELECT id FROM document_sections WHERE section_number = '01' LIMIT 1));

-- ISF Sections (Investigator Site File)
INSERT INTO document_sections (scope, section_number, section_name, stage, is_required) VALUES
('ISF', '01', 'Regulatory Documents', 'before', true),
('ISF', '02', 'Ethics Committee/IRB', 'before', true),
('ISF', '03', 'Trial Management', 'before', true),
('ISF', '04', 'Investigational Product', 'during', true),
('ISF', '05', 'Safety Reporting', 'during', true),
('ISF', '06', 'Site Staff', 'before', true),
('ISF', '07', 'Labs & Medical', 'before', true),
('ISF', '08', 'Monitoring & Audits', 'during', false);

-- IF Sections (Informed Consent File) 
INSERT INTO document_sections (scope, section_number, section_name, stage, is_required) VALUES
('IF', '01', 'Informed Consent Forms', 'before', true),
('IF', '02', 'ICF Approvals', 'before', true),
('IF', '03', 'Signed Consent Forms', 'during', true),
('IF', '04', 'Re-Consent', 'during', false);

-- ============================================
-- SAMPLE DATA FOR TESTING
-- ============================================

-- Create sample sites
INSERT INTO sites (site_number, site_name, principal_investigator, address, status) VALUES
('101', 'Memorial Hospital Research Center', 'Dr. Sarah Johnson', '123 Medical Plaza, Boston, MA 02115', 'active'),
('102', 'University Clinical Trials Unit', 'Dr. Michael Chen', '456 Research Drive, San Francisco, CA 94158', 'active'),
('103', 'Regional Health Sciences Center', 'Dr. Emily Rodriguez', '789 Healthcare Blvd, Houston, TX 77030', 'active'),
('104', 'Metro Medical Research', 'Dr. David Kim', '321 Clinical Ave, New York, NY 10016', 'recruiting'),
('105', 'Coastal Research Institute', 'Dr. Lisa Martinez', '654 Ocean View, Seattle, WA 98101', 'active');

COMMENT ON TABLE profiles IS 'User profiles extending Supabase auth.users with role and site assignment';
COMMENT ON TABLE sites IS 'Clinical trial sites participating in studies';
COMMENT ON TABLE documents IS 'All trial documents with DIA EDM classification';
COMMENT ON TABLE document_sections IS 'DIA EDM Reference Model taxonomy for TMF/IF/ISF';
COMMENT ON TABLE questions IS 'Community Q&A questions';
COMMENT ON TABLE answers IS 'Community answers with AI citations for compliance';
COMMENT ON TABLE audit_log IS 'Complete audit trail for Part 11 compliance';

