import ReportsDashboard from '@/components/reports/reports-dashboard'

export default async function ReportsPage() {
  // TODO: Fetch analytics data from database
  // const supabase = await createClient()
  // const { data: analytics } = await supabase.rpc('get_trial_analytics')

  return <ReportsDashboard />
}
