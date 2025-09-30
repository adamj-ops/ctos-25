export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      answers: {
        Row: {
          author_id: string
          citations: Json | null
          content: string
          created_at: string | null
          id: string
          is_accepted: boolean | null
          is_ai_generated: boolean | null
          question_id: string
          updated_at: string | null
          vote_count: number | null
        }
        Insert: {
          author_id: string
          citations?: Json | null
          content: string
          created_at?: string | null
          id?: string
          is_accepted?: boolean | null
          is_ai_generated?: boolean | null
          question_id: string
          updated_at?: string | null
          vote_count?: number | null
        }
        Update: {
          author_id?: string
          citations?: Json | null
          content?: string
          created_at?: string | null
          id?: string
          is_accepted?: boolean | null
          is_ai_generated?: boolean | null
          question_id?: string
          updated_at?: string | null
          vote_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "answers_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: Database["public"]["Enums"]["audit_action"]
          created_at: string | null
          details: Json | null
          id: string
          ip_address: unknown | null
          resource_id: string | null
          resource_type: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          action: Database["public"]["Enums"]["audit_action"]
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          action?: Database["public"]["Enums"]["audit_action"]
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      document_sections: {
        Row: {
          artifact_type: string | null
          created_at: string | null
          description: string | null
          id: string
          is_required: boolean | null
          parent_id: string | null
          scope: Database["public"]["Enums"]["document_scope"]
          section_name: string
          section_number: string
          stage: Database["public"]["Enums"]["trial_stage"] | null
          subsection_name: string | null
          subsection_number: string | null
        }
        Insert: {
          artifact_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_required?: boolean | null
          parent_id?: string | null
          scope: Database["public"]["Enums"]["document_scope"]
          section_name: string
          section_number: string
          stage?: Database["public"]["Enums"]["trial_stage"] | null
          subsection_name?: string | null
          subsection_number?: string | null
        }
        Update: {
          artifact_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_required?: boolean | null
          parent_id?: string | null
          scope?: Database["public"]["Enums"]["document_scope"]
          section_name?: string
          section_number?: string
          stage?: Database["public"]["Enums"]["trial_stage"] | null
          subsection_name?: string | null
          subsection_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_sections_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "document_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          certified_by: string | null
          certified_date: string | null
          created_at: string | null
          document_name: string
          document_type: string | null
          file_path: string
          file_size: number | null
          file_type: string | null
          id: string
          is_certified: boolean | null
          scope: Database["public"]["Enums"]["document_scope"]
          search_vector: unknown | null
          section_id: string
          site_id: string | null
          status: Database["public"]["Enums"]["document_status"] | null
          supersedes_id: string | null
          updated_at: string | null
          uploaded_by: string
          version: string
        }
        Insert: {
          certified_by?: string | null
          certified_date?: string | null
          created_at?: string | null
          document_name: string
          document_type?: string | null
          file_path: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_certified?: boolean | null
          scope: Database["public"]["Enums"]["document_scope"]
          search_vector?: unknown | null
          section_id: string
          site_id?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          supersedes_id?: string | null
          updated_at?: string | null
          uploaded_by: string
          version: string
        }
        Update: {
          certified_by?: string | null
          certified_date?: string | null
          created_at?: string | null
          document_name?: string
          document_type?: string | null
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_certified?: boolean | null
          scope?: Database["public"]["Enums"]["document_scope"]
          search_vector?: unknown | null
          section_id?: string
          site_id?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          supersedes_id?: string | null
          updated_at?: string | null
          uploaded_by?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "document_sections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_site_id_fkey"
            columns: ["site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_supersedes_id_fkey"
            columns: ["supersedes_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          assigned_site_id: string | null
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          assigned_site_id?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          assigned_site_id?: string | null
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_assigned_site_id_fkey"
            columns: ["assigned_site_id"]
            isOneToOne: false
            referencedRelation: "sites"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          author_id: string
          content: string
          created_at: string | null
          id: string
          tags: string[] | null
          title: string
          updated_at: string | null
          view_count: number | null
          vote_count: number | null
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string | null
          id?: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
          view_count?: number | null
          vote_count?: number | null
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string | null
          id?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          view_count?: number | null
          vote_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sites: {
        Row: {
          address: string | null
          created_at: string | null
          id: string
          principal_investigator: string | null
          site_name: string
          site_number: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id?: string
          principal_investigator?: string | null
          site_name: string
          site_number: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: string
          principal_investigator?: string | null
          site_name?: string
          site_number?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      audit_action:
        | "create"
        | "read"
        | "update"
        | "delete"
        | "download"
        | "upload"
        | "query_ai"
        | "login"
        | "logout"
      document_scope: "TMF" | "IF" | "ISF"
      document_status: "current" | "certified" | "superseded" | "missing"
      trial_stage: "before" | "during" | "after"
      user_role: "sponsor" | "site_monitor" | "site_coordinator" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      audit_action: [
        "create",
        "read",
        "update",
        "delete",
        "download",
        "upload",
        "query_ai",
        "login",
        "logout",
      ],
      document_scope: ["TMF", "IF", "ISF"],
      document_status: ["current", "certified", "superseded", "missing"],
      trial_stage: ["before", "during", "after"],
      user_role: ["sponsor", "site_monitor", "site_coordinator", "admin"],
    },
  },
} as const