// Generated types from Supabase schema
// Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'sponsor' | 'site_monitor' | 'site_coordinator' | 'admin'
          assigned_site_id: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'sponsor' | 'site_monitor' | 'site_coordinator' | 'admin'
          assigned_site_id?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'sponsor' | 'site_monitor' | 'site_coordinator' | 'admin'
          assigned_site_id?: string | null
          avatar_url?: string | null
        }
      }
      sites: {
        Row: {
          id: string
          site_number: string
          site_name: string
          principal_investigator: string | null
          address: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          site_number: string
          site_name: string
          principal_investigator?: string | null
          address?: string | null
          status?: string
        }
        Update: {
          site_number?: string
          site_name?: string
          principal_investigator?: string | null
          address?: string | null
          status?: string
        }
      }
      documents: {
        Row: {
          id: string
          scope: 'TMF' | 'IF' | 'ISF'
          section_id: string
          site_id: string | null
          document_name: string
          document_type: string | null
          version: string
          status: 'current' | 'certified' | 'superseded' | 'missing'
          file_path: string
          file_size: number | null
          file_type: string | null
          is_certified: boolean
          certified_by: string | null
          certified_date: string | null
          supersedes_id: string | null
          uploaded_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          scope: 'TMF' | 'IF' | 'ISF'
          section_id: string
          site_id?: string | null
          document_name: string
          document_type?: string | null
          version: string
          status?: 'current' | 'certified' | 'superseded' | 'missing'
          file_path: string
          file_size?: number | null
          file_type?: string | null
          is_certified?: boolean
          certified_by?: string | null
          certified_date?: string | null
          supersedes_id?: string | null
          uploaded_by: string
        }
        Update: {
          scope?: 'TMF' | 'IF' | 'ISF'
          section_id?: string
          site_id?: string | null
          document_name?: string
          document_type?: string | null
          version?: string
          status?: 'current' | 'certified' | 'superseded' | 'missing'
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          is_certified?: boolean
          certified_by?: string | null
          certified_date?: string | null
          supersedes_id?: string | null
        }
      }
      document_sections: {
        Row: {
          id: string
          scope: 'TMF' | 'IF' | 'ISF'
          section_number: string
          section_name: string
          subsection_number: string | null
          subsection_name: string | null
          artifact_type: string | null
          stage: 'before' | 'during' | 'after' | null
          description: string | null
          is_required: boolean
          parent_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          scope: 'TMF' | 'IF' | 'ISF'
          section_number: string
          section_name: string
          subsection_number?: string | null
          subsection_name?: string | null
          artifact_type?: string | null
          stage?: 'before' | 'during' | 'after' | null
          description?: string | null
          is_required?: boolean
          parent_id?: string | null
        }
        Update: {
          scope?: 'TMF' | 'IF' | 'ISF'
          section_number?: string
          section_name?: string
          subsection_number?: string | null
          subsection_name?: string | null
          artifact_type?: string | null
          stage?: 'before' | 'during' | 'after' | null
          description?: string | null
          is_required?: boolean
          parent_id?: string | null
        }
      }
      questions: {
        Row: {
          id: string
          author_id: string
          title: string
          content: string
          tags: string[]
          view_count: number
          vote_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          author_id: string
          title: string
          content: string
          tags?: string[]
          view_count?: number
          vote_count?: number
        }
        Update: {
          title?: string
          content?: string
          tags?: string[]
          view_count?: number
          vote_count?: number
        }
      }
      answers: {
        Row: {
          id: string
          question_id: string
          author_id: string
          content: string
          is_ai_generated: boolean
          citations: Json | null
          vote_count: number
          is_accepted: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          question_id: string
          author_id: string
          content: string
          is_ai_generated?: boolean
          citations?: Json | null
          vote_count?: number
          is_accepted?: boolean
        }
        Update: {
          content?: string
          citations?: Json | null
          vote_count?: number
          is_accepted?: boolean
        }
      }
      audit_log: {
        Row: {
          id: string
          user_id: string
          action: 'create' | 'read' | 'update' | 'delete' | 'download' | 'upload' | 'query_ai' | 'login' | 'logout'
          resource_type: string | null
          resource_id: string | null
          details: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          action: 'create' | 'read' | 'update' | 'delete' | 'download' | 'upload' | 'query_ai' | 'login' | 'logout'
          resource_type?: string | null
          resource_id?: string | null
          details?: Json | null
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: Record<string, never>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      user_role: 'sponsor' | 'site_monitor' | 'site_coordinator' | 'admin'
      document_scope: 'TMF' | 'IF' | 'ISF'
      document_status: 'current' | 'certified' | 'superseded' | 'missing'
      trial_stage: 'before' | 'during' | 'after'
      audit_action: 'create' | 'read' | 'update' | 'delete' | 'download' | 'upload' | 'query_ai' | 'login' | 'logout'
    }
  }
}

