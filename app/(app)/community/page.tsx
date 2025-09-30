import CommunityFeed from '@/components/community/community-feed'

export default async function CommunityPage() {
  // TODO: Fetch questions from database when ready
  // const supabase = await createClient()
  // const { data: questions } = await supabase.from('questions').select('*')

  return <CommunityFeed />
}
