'use client'

import React from 'react'
import Link from 'next/link'
import {
  Building2,
  FileText,
  GraduationCap,
  AlertCircle,
  TrendingUp,
  ChevronRight,
  ClipboardCheck,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function ReportsDashboard() {
  const stats = {
    activeSites: 12,
    totalDocuments: 240,
    documentCompletion: 87,
    trainingCompliance: 88.75,
    openActions: 15,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Reports & Analytics</h1>
          <p className="text-fg-muted mt-1">Monitor trial performance and compliance metrics</p>
        </div>
        <Button variant="outline">
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center gap-1 text-success text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+3</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold">{stats.activeSites}</h3>
            <p className="text-sm text-fg-muted">Active Sites</p>
            <Link
              href="/app/sites"
              className="text-sm text-primary hover:underline flex items-center mt-3"
            >
              View all sites <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold">{stats.documentCompletion}%</h3>
            <p className="text-sm text-fg-muted">Document Completion</p>
            <Link
              href="/app/documents/missing"
              className="text-sm text-primary hover:underline flex items-center mt-3"
            >
              View missing <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold">{stats.trainingCompliance.toFixed(1)}%</h3>
            <p className="text-sm text-fg-muted">Training Compliance</p>
            <p className="text-xs text-fg-muted mt-3">142/160 staff compliant</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold">{stats.openActions}</h3>
            <p className="text-sm text-fg-muted">Open Actions</p>
            <div className="flex gap-2 mt-3">
              <Badge variant="destructive" className="text-xs">5 High</Badge>
              <Badge variant="secondary" className="text-xs">6 Med</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              href="/app/sites/monitoring"
              className="relative bg-surface border border-border rounded-lg p-4 hover:shadow-md hover:border-primary transition-all flex flex-col items-center justify-center text-center"
            >
              <ClipboardCheck className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Site Visits</span>
              <Badge className="absolute -top-2 -right-2 rounded-full">3</Badge>
            </Link>
            
            <Link
              href="/app/documents"
              className="relative bg-surface border border-border rounded-lg p-4 hover:shadow-md hover:border-primary transition-all flex flex-col items-center justify-center text-center"
            >
              <FileText className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Documents</span>
              <Badge variant="destructive" className="absolute -top-2 -right-2 rounded-full">
                12
              </Badge>
            </Link>

            <Link
              href="/app/community"
              className="relative bg-surface border border-border rounded-lg p-4 hover:shadow-md hover:border-primary transition-all flex flex-col items-center justify-center text-center"
            >
              <AlertCircle className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Q&A</span>
              <Badge className="absolute -top-2 -right-2 rounded-full">7</Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
