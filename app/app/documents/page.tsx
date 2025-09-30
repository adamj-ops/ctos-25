import { createClient } from '@/lib/supabase/server'
import { Search, Upload } from 'lucide-react'
import { DocumentTable } from '@/components/documents/document-table'
import { DocumentFilters } from '@/components/documents/document-filters'
import { Button } from '@/components/ui/button'
import { Database } from '@/lib/supabase/types'

type TabType = 'all' | 'my' | 'missing' | 'by-site' | 'by-stage'

interface PageProps {
  searchParams: Promise<{
    tab?: string
    scope?: string
    section?: string
    site?: string
    status?: string
  }>
}

export default async function DocumentsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const activeTab = (params.tab as TabType) || 'all'
  const supabase = await createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch documents with joins to sections and sites
  let query = supabase
    .from('documents')
    .select(`
      *,
      section:document_sections(*),
      site:sites(*),
      uploader:profiles!documents_uploaded_by_fkey(full_name, email)
    `)
    .order('created_at', { ascending: false })

  // Apply tab filters
  if (activeTab === 'my' && user) {
    query = query.eq('uploaded_by', user.id)
  } else if (activeTab === 'missing') {
    query = query.eq('status', 'missing')
  }

  // Apply URL parameter filters
  if (params.scope) {
    query = query.eq('scope', params.scope as Database['public']['Enums']['document_scope'])
  }
  if (params.section) {
    query = query.eq('section_id', params.section)
  }
  if (params.site) {
    query = query.eq('site_id', params.site)
  }
  if (params.status) {
    query = query.eq('status', params.status as Database['public']['Enums']['document_status'])
  }

  const { data: documents } = await query

  // Fetch sites for filter dropdown
  const { data: sites } = await supabase.from('sites').select('*').order('site_number')

  // Fetch sections for filter dropdown
  const { data: sections } = await supabase
    .from('document_sections')
    .select('*')
    .is('parent_id', null)
    .order('section_number')

  // Get document counts for stats
  const { count: totalCount } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })

  const { count: missingCount } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'missing')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="h1">Document Library</h1>
          <p className="body text-fg-muted mt-2">
            {totalCount || 0} documents • {missingCount || 0} missing
          </p>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-fg-muted" />
            </div>
            <input
              type="text"
              placeholder="Search documents..."
              className="h-9 w-full md:w-64 rounded-xl border border-border bg-surface pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs text-fg-subtle">
                /
              </kbd>
            </div>
          </div>
          <Button className="inline-flex h-9 items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Main card with tabs and table */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
        {/* Tabs */}
        <DocumentTabs activeTab={activeTab} />

        {/* Filters */}
        <DocumentFilters 
          sites={sites || []} 
          sections={sections || []}
        />

        {/* Table */}
        <DocumentTable documents={documents || []} />
      </div>
    </div>
  )
}

// Tabs component (client component for navigation)
function DocumentTabs({ activeTab }: { activeTab: TabType }) {
  const tabs = [
    { id: 'all', label: 'All Documents' },
    { id: 'my', label: 'My Documents' },
    { id: 'missing', label: 'Missing/Overdue' },
    { id: 'by-site', label: 'By Site' },
    { id: 'by-stage', label: 'By Stage' },
  ]

  return (
    <div className="border-b border-border">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`?tab=${tab.id}`}
            className={`px-4 py-3 body-sm font-medium border-b-2 whitespace-nowrap transition-smooth ${
              activeTab === tab.id
                ? 'border-primary text-foreground'
                : 'border-transparent text-fg-muted hover:text-foreground hover:border-border'
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  )
}
