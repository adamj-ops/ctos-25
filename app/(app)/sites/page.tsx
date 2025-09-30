import SitesOverview from '@/components/sites/sites-overview'

export default async function SitesPage() {
  // TODO: Fetch sites from database when ready
  // const supabase = await createClient()
  // const { data: sites } = await supabase.from('sites').select('*')

  return <SitesOverview />
}