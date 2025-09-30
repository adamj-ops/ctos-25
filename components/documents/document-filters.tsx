'use client'

import { useState } from 'react'
import { X, SlidersHorizontal } from 'lucide-react'
import { Database } from '@/lib/supabase/types'

type Site = Database['public']['Tables']['sites']['Row']
type DocumentSection = Database['public']['Tables']['document_sections']['Row']

interface DocumentFiltersProps {
  sites: Site[]
  sections: DocumentSection[]
}

export function DocumentFilters({ sites, sections }: DocumentFiltersProps) {
  const [showFilters, setShowFilters] = useState(true)
  
  // Mock active filters - in real app, read from URL params
  const activeFilters = [
    { id: '1', type: 'Scope', value: 'TMF' },
    { id: '2', type: 'Status', value: 'Current' },
  ]

  return (
    <div className="p-4 border-b border-border bg-surface">
      <div className="flex items-center justify-between mb-4">
        <button
          className="flex items-center body-sm text-fg-muted hover:text-foreground transition-smooth"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <span className="body-sm text-fg-muted">
          Showing all documents
        </span>
      </div>

      {showFilters && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {/* TMF Scope */}
            <div>
              <label className="block body-sm font-semibold text-foreground mb-1">
                TMF Scope
              </label>
              <select className="h-9 w-full rounded-xl border border-border bg-surface px-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                <option value="">All</option>
                <option value="TMF">TMF (Trial Master File)</option>
                <option value="IF">IF (Informed Consent File)</option>
                <option value="ISF">ISF (Investigator Site File)</option>
              </select>
            </div>

            {/* Section */}
            <div>
              <label className="block body-sm font-semibold text-foreground mb-1">
                Section
              </label>
              <select className="h-9 w-full rounded-xl border border-border bg-surface px-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                <option value="">All Sections</option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.section_number} - {section.section_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Site */}
            <div>
              <label className="block body-sm font-semibold text-foreground mb-1">
                Site
              </label>
              <select className="h-9 w-full rounded-xl border border-border bg-surface px-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                <option value="">All Sites</option>
                {sites.map((site) => (
                  <option key={site.id} value={site.id}>
                    {site.site_number} - {site.site_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block body-sm font-semibold text-foreground mb-1">
                Status
              </label>
              <select className="h-9 w-full rounded-xl border border-border bg-surface px-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                <option value="">All</option>
                <option value="current">Current</option>
                <option value="certified">Certified</option>
                <option value="superseded">Superseded</option>
                <option value="missing">Missing</option>
              </select>
            </div>

            {/* Date Range */}
            <div className="lg:col-span-2">
              <label className="block body-sm font-semibold text-foreground mb-1">
                Date Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  className="h-9 flex-1 rounded-xl border border-border bg-surface px-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                />
                <input
                  type="date"
                  className="h-9 flex-1 rounded-xl border border-border bg-surface px-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {activeFilters.map((filter) => (
                <div
                  key={filter.id}
                  className="inline-flex items-center bg-muted text-fg-muted caption rounded-full px-2.5 py-1"
                >
                  <span className="mr-1 font-medium">{filter.type}:</span>
                  {filter.value}
                  <button className="ml-1.5 text-fg-muted hover:text-foreground transition-smooth">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <button className="caption text-primary hover:text-primary-700 transition-smooth">
                Clear all
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
