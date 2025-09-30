import { createClient } from '@/lib/supabase/server'
import ReportsDashboard from '@/components/reports/reports-dashboard'

export default async function ReportsPage() {
  const supabase = await createClient()

  // TODO: Fetch analytics data from database
  // const { data: analytics } = await supabase.rpc('get_trial_analytics')

  return <ReportsDashboard />
}
