import { createClient } from '@/lib/supabase/server'
import CommunityFeed from '@/components/community/community-feed'

export default async function CommunityPage() {
  const supabase = await createClient()

  // TODO: Fetch questions from database when ready
  // const { data: questions } = await supabase.from('questions').select('*')

  return <CommunityFeed />
}
