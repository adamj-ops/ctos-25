import { createClient } from '@/lib/supabase/server'
import SitesOverview from '@/components/sites/sites-overview'

export default async function SitesPage() {
  const supabase = await createClient()

  // TODO: Fetch sites from database when ready
  // const { data: sites } = await supabase.from('sites').select('*')

  return <SitesOverview />
}