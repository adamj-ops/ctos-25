# CTOS-25 Setup Guide

## 🎯 What's Been Created

### ✅ Step 1: Database Foundation (COMPLETED)

**Files Created:**
- ✅ `lib/supabase/client.ts` - Browser Supabase client
- ✅ `lib/supabase/server.ts` - Server-side Supabase client
- ✅ `lib/supabase/middleware.ts` - Auth middleware
- ✅ `lib/supabase/types.ts` - TypeScript types (placeholder)
- ✅ `supabase/migrations/20250131_initial_schema.sql` - Complete database schema
- ✅ `.env.local.example` - Environment variables template

**Database Schema Includes:**
- 7 tables: profiles, sites, documents, document_sections, questions, answers, audit_log
- Row Level Security (RLS) policies for multi-tenant access
- Full-text search on documents
- Audit trail for Part 11 compliance
- 20+ sample TMF/ISF/IF sections (DIA EDM Reference Model)

## 🚀 Next Steps

### 1. Set Up Supabase Project

**Option A: Use Existing Supabase Project**
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials
# Get these from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
```

**Option B: Create New Supabase Project**
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project (or create new one)
supabase link --project-ref YOUR_PROJECT_REF

# Run migration
supabase db push

# Generate TypeScript types
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/types.ts
```

### 2. Configure Environment Variables

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 3. Create Storage Bucket

In Supabase Dashboard:
1. Go to Storage
2. Create bucket named `documents`
3. Set to Private
4. Add RLS policies:

```sql
-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload documents"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'documents' AND
  auth.role() = 'authenticated'
);

-- Allow users to download based on document access
CREATE POLICY "Users can download accessible documents"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'documents' AND
  auth.role() = 'authenticated'
);
```

### 4. Seed Test Data (Optional)

The migration already includes 5 sample sites. To add test users:

```sql
-- Create test users (do this in Supabase Auth dashboard first)
-- Then add profiles:

INSERT INTO profiles (id, email, full_name, role, assigned_site_id) VALUES
('user-id-1', 'sponsor@ctos.com', 'John Sponsor', 'sponsor', NULL),
('user-id-2', 'monitor@ctos.com', 'Jane Monitor', 'site_monitor', 'site-101-id'),
('user-id-3', 'coordinator@ctos.com', 'Bob Coordinator', 'site_coordinator', 'site-101-id');
```

## 📋 What's Next

### Step 2: App Shell (IN PROGRESS)
Build the core application layout:
- [ ] Navbar with breadcrumbs, role switcher, Ask AI button
- [ ] Sidebar navigation
- [ ] Role-based access context
- [ ] Protected route layout

### Step 3: Clone MagicPatterns Component
Analyze the prototype component for reusable patterns

### Step 4: Document Library Page
- [ ] Document table with filters
- [ ] Search and sorting
- [ ] Bulk actions
- [ ] Status badges

### Step 5-6: AI & Upload Features
- [ ] Ask AI drawer
- [ ] Document upload wizard

## 🔍 Testing Your Setup

```bash
# Run development server
npm run dev

# Test database connection (create a test page):
# app/test/page.tsx
```

## 🎨 Design System

The app uses the **Render Design System** already configured:
- Colors: Indigo (#5458EA) primary
- Typography: Inter (UI) + Roboto Mono (code)
- Components: shadcn/ui with custom tokens
- See: `.cursor/docs/render-design-system.md`

## 📚 Database Schema

### Key Tables

**profiles** - User roles and site assignments
```typescript
role: 'sponsor' | 'site_monitor' | 'site_coordinator' | 'admin'
assigned_site_id: UUID (optional, for site-specific roles)
```

**documents** - All trial documents
```typescript
scope: 'TMF' | 'IF' | 'ISF'
status: 'current' | 'certified' | 'superseded' | 'missing'
section_id: References document_sections
```

**document_sections** - DIA EDM taxonomy
```typescript
// TMF: Trial Master File (sponsor docs)
// IF: Informed Consent File
// ISF: Investigator Site File
```

### Access Control (RLS)

- **Site Coordinators**: Only see ISF docs for their assigned site
- **Site Monitors**: See all docs for assigned sites  
- **Sponsors/Admins**: See everything
- **All users**: Can create questions/answers

## 🛡️ Compliance Features

- ✅ Audit log for all actions (Part 11)
- ✅ Row-level security
- ✅ Document certification tracking
- ✅ Version control with supersedes relationship
- ✅ Full-text search

## 🐛 Troubleshooting

**Can't connect to Supabase?**
- Check `.env.local` has correct credentials
- Verify Supabase project is running
- Check browser console for errors

**Migration errors?**
- Ensure Supabase CLI is installed
- Check you're linked to correct project
- Try `supabase db reset` (WARNING: deletes all data)

**Type errors?**
- Regenerate types: `npx supabase gen types typescript --project-id YOUR_PROJECT > lib/supabase/types.ts`

## 📞 Support

- Database schema: `supabase/migrations/20250131_initial_schema.sql`
- Design system: `.cursor/docs/render-design-system.md`
- Project notes: `.cursor/notes/agentnotes.md`

---

**Status**: ✅ Database foundation complete, ready for app shell development!
