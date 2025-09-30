import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { RoleProvider } from '@/contexts/RoleContext'
import { AppShell } from '@/components/app-shell/app-shell'
import { Database } from '@/lib/supabase/types'

type UserRole = Database['public']['Enums']['user_role']

interface Profile {
  id: string
  email: string
  role: UserRole
  full_name?: string
  assigned_site_id?: string
}

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  // Check authentication
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get user profile with role
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single() as { data: Profile | null }

  // For now, if no profile exists, use defaults
  // In production, you'd create the profile via a signup trigger or separate endpoint
  const userRole: UserRole = profile?.role || 'site_coordinator'
  const userEmail = profile?.email || user.email!

  return (
    <RoleProvider userRole={userRole}>
      <div className="min-h-screen bg-bg">
        <AppShell userEmail={userEmail} userRole={userRole}>
          {children}
        </AppShell>
      </div>
    </RoleProvider>
  )
}
