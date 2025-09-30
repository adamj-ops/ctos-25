'use client'

import React, { useState } from 'react'
import { BarChart3, FileText, Filter, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import mockDocuments from '@/lib/data/mockDocuments'
import { Document } from '@/types/document'

interface MissingDocumentsViewProps {
  initialDocuments?: Document[]
}

export default function MissingDocumentsView({ initialDocuments }: MissingDocumentsViewProps) {
  const [selectedScope, setSelectedScope] = useState<string>('all')

  // Use mock data for now, replace with initialDocuments when DB is populated
  const documents = initialDocuments && initialDocuments.length > 0 
    ? initialDocuments 
    : mockDocuments.filter(doc => doc.status === 'Missing' || doc.status === 'Overdue')

  // Mock completeness data
  const completenessData = [
    { scope: 'TMF', percentage: 87 },
    { scope: 'IF', percentage: 92 },
    { scope: 'ISF', percentage: 78 },
  ]

  // Filter documents based on selected scope
  const filteredDocuments = selectedScope === 'all'
    ? documents
    : documents.filter((doc) => {
        if (selectedScope === 'tmf')
          return doc.section.startsWith('01') || doc.section.startsWith('02')
        if (selectedScope === 'if')
          return doc.section.startsWith('03') || doc.section.startsWith('04')
        if (selectedScope === 'isf') return doc.section.startsWith('05')
        return true
      })

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Overdue':
        return 'bg-destructive/10 text-destructive border-destructive/30'
      case 'Missing':
        return 'bg-muted text-muted-foreground'
      case 'Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const getRowClasses = (status: string) => {
    return status === 'Overdue' ? 'border-l-4 border-l-destructive' : ''
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Missing & Overdue Documents
          </h1>
          <p className="text-fg-muted mt-1">
            Track and manage documents that need attention
          </p>
        </div>
      </div>

      {/* Completeness Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {completenessData.map((item) => (
          <Card key={item.scope}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-fg-muted">{item.scope} Completeness</p>
                  <p className="text-3xl font-bold mt-2">{item.percentage}%</p>
                </div>
                <div className="relative h-16 w-16">
                  <svg className="h-16 w-16 transform -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-muted"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${(item.percentage / 100) * 88} 88`}
                      className={`${
                        item.percentage > 90
                          ? 'text-primary'
                          : item.percentage > 70
                            ? 'text-amber-500'
                            : 'text-destructive'
                      }`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.percentage > 90 ? (
                      <CheckCircle className="h-6 w-6 text-primary" />
                    ) : (
                      <BarChart3 className="h-6 w-6 text-fg-muted" />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Table */}
      <Card>
        <CardHeader className="border-b border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-fg-muted" />
              <span className="text-sm font-medium">Filters</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={selectedScope} onValueChange={setSelectedScope}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Scopes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Scopes</SelectItem>
                  <SelectItem value="tmf">TMF</SelectItem>
                  <SelectItem value="if">IF</SelectItem>
                  <SelectItem value="isf">ISF</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-fg-muted">
                    Required Document
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-fg-muted">
                    TMF Section
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-fg-muted">
                    Site
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-fg-muted">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-fg-muted">
                    Updated
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-fg-muted">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className={`hover:bg-accent/50 ${getRowClasses(doc.status)}`}
                  >
                    <td className="px-4 py-4 text-sm font-medium">{doc.name}</td>
                    <td className="px-4 py-4 text-sm text-fg-muted">{doc.section}</td>
                    <td className="px-4 py-4 text-sm text-fg-muted">{doc.site || '-'}</td>
                    <td className="px-4 py-4">
                      <Badge
                        variant={doc.status === 'Overdue' ? 'destructive' : 'secondary'}
                        className={getStatusClasses(doc.status)}
                      >
                        {doc.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-sm text-fg-muted">{doc.updatedAt}</td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="outline" size="sm">
                        Request from Site
                      </Button>
                    </td>
                  </tr>
                ))}
                {filteredDocuments.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center">
                      <FileText className="w-12 h-12 mx-auto text-fg-muted mb-4" />
                      <h3 className="text-lg font-semibold mb-2">All documents up to date!</h3>
                      <p className="text-sm text-fg-muted">
                        No missing or overdue documents at this time.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
