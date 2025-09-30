import { createClient } from '@/lib/supabase/server'
import MissingDocumentsView from '@/components/documents/missing-documents-view'

export default async function MissingDocumentsPage() {
  const supabase = await createClient()

  // Fetch missing and overdue documents
  const { data: documents } = await supabase
    .from('documents')
    .select('*')
    .in('status', ['missing', 'overdue'])
    .order('updated_at', { ascending: false })

  return <MissingDocumentsView initialDocuments={documents || []} />
}
