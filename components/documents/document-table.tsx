'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MoreHorizontal, FileText, Upload, Check, Download } from 'lucide-react'
import { Database } from '@/lib/supabase/types'
import { StatusBadge } from './status-badge'
import { ScopePill } from './scope-pill'

type Document = Database['public']['Tables']['documents']['Row'] & {
  section: Database['public']['Tables']['document_sections']['Row'] | null
  site: Database['public']['Tables']['sites']['Row'] | null
  uploader: { full_name: string | null; email: string } | null
}

interface DocumentTableProps {
  documents: Document[]
}

export function DocumentTable({ documents }: DocumentTableProps) {
  const [selectedDocs, setSelectedDocs] = useState<string[]>([])

  const toggleSelection = (id: string) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter((docId) => docId !== id))
    } else {
      setSelectedDocs([...selectedDocs, id])
    }
  }

  const toggleAll = () => {
    if (selectedDocs.length === documents.length) {
      setSelectedDocs([])
    } else {
      setSelectedDocs(documents.map((doc) => doc.id))
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <>
      {/* Bulk actions bar */}
      {selectedDocs.length > 0 && (
        <div className="p-3 bg-primary/10 border-b border-primary/30 flex items-center justify-between">
          <span className="body-sm font-medium text-foreground">
            {selectedDocs.length} documents selected
          </span>
          <div className="flex space-x-2">
            <button className="inline-flex items-center h-8 px-3 caption font-medium bg-surface border border-border rounded-lg hover:bg-muted transition-smooth">
              <Check className="h-3 w-3 mr-1.5" />
              Mark as Certified
            </button>
            <button className="inline-flex items-center h-8 px-3 caption font-medium bg-surface border border-border rounded-lg hover:bg-muted transition-smooth">
              <Download className="h-3 w-3 mr-1.5" />
              Download
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="sticky top-0 z-10 bg-surface border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border accent-primary focus:ring-2 focus:ring-primary/40"
                  checked={selectedDocs.length === documents.length && documents.length > 0}
                  onChange={toggleAll}
                />
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Document Name
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Scope
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Section
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Site
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Version
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Status
              </th>
              <th className="px-4 py-3 text-left body-sm font-semibold text-fg-muted">
                Updated
              </th>
              <th className="px-4 py-3 text-right body-sm font-semibold text-fg-muted">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-surface">
            {documents.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <FileText className="w-12 h-12 text-fg-muted mb-4" />
                    <h3 className="h3 mb-2">No documents found</h3>
                    <p className="body-sm text-fg-muted mb-4">
                      Upload your first document or ask AI about required documents.
                    </p>
                    <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white transition-smooth hover:shadow-md">
                      <Upload className="w-4 h-4" />
                      Upload Document
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              documents.map((doc) => (
                <tr
                  key={doc.id}
                  className={`border-b border-border hover:bg-muted transition-smooth ${
                    selectedDocs.includes(doc.id) ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-border accent-primary focus:ring-2 focus:ring-primary/40"
                      checked={selectedDocs.includes(doc.id)}
                      onChange={() => toggleSelection(doc.id)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/app/documents/${doc.id}`}
                      className="body font-medium text-foreground hover:text-primary transition-smooth"
                    >
                      {doc.document_name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <ScopePill scope={doc.scope} />
                  </td>
                  <td className="px-4 py-3 body-sm text-fg-muted">
                    {doc.section?.section_number} - {doc.section?.section_name}
                  </td>
                  <td className="px-4 py-3 body-sm text-fg-muted">
                    {doc.site ? `${doc.site.site_number} - ${doc.site.site_name}` : '-'}
                  </td>
                  <td className="px-4 py-3 body-sm text-fg-muted">
                    {doc.version}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={doc.status || 'current'} />
                  </td>
                  <td className="px-4 py-3 body-sm text-fg-muted">
                    {doc.updated_at ? new Date(doc.updated_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    }) : '-'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="inline-flex items-center justify-center p-2 rounded-lg text-fg-muted hover:bg-muted hover:text-foreground transition-smooth">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

