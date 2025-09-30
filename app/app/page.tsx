import { createClient } from '@/lib/supabase/server'
import { FileText, AlertTriangle, CheckCircle, Upload, MessageSquare, Building2, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import mockDocuments from '@/lib/data/mockDocuments'
import { mockSites } from '@/lib/data/mockSites'

export default async function AppHomePage() {
  const supabase = await createClient()

  // Fetch dashboard stats (fallback to mock data if DB is empty)
  const { count: totalDocs } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })

  const { count: missingDocs } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'missing')

  const { count: certifiedDocs } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true })
    .eq('is_certified', true)

  // Use mock data if database is empty
  const useMockData = !totalDocs || totalDocs === 0
  const stats = {
    totalDocs: useMockData ? mockDocuments.length : totalDocs || 0,
    missingDocs: useMockData ? mockDocuments.filter(d => d.status === 'Missing' || d.status === 'Overdue').length : missingDocs || 0,
    certifiedDocs: useMockData ? mockDocuments.filter(d => d.status === 'Certified').length : certifiedDocs || 0,
    activeSites: mockSites.filter(s => s.isActive).length,
  }

  // Recent activity mock data
  const recentActivity = [
    {
      id: '1',
      type: 'document',
      icon: FileText,
      title: 'Protocol Amendment 2 uploaded',
      description: 'by Robert Chen at Site 103',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      type: 'question',
      icon: MessageSquare,
      title: 'New question posted',
      description: 'Is site PI medical license required in ISF?',
      timestamp: '5 hours ago',
    },
    {
      id: '3',
      type: 'certification',
      icon: CheckCircle,
      title: 'Site Initiation Report certified',
      description: 'by Jennifer Adams at Site 102',
      timestamp: '1 day ago',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="h1 mb-2">Welcome back!</h1>
        <p className="body-lg text-fg-muted">
          Here&apos;s what&apos;s happening with your clinical trial.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Documents"
          value={stats.totalDocs}
          icon={FileText}
          color="primary"
          trend="+12 this month"
        />
        <StatCard
          title="Certified Copies"
          value={stats.certifiedDocs}
          icon={CheckCircle}
          color="success"
          trend="87% completion"
        />
        <StatCard
          title="Missing Documents"
          value={stats.missingDocs}
          icon={AlertTriangle}
          color="warning"
          href="/app/documents/missing"
        />
        <StatCard
          title="Active Sites"
          value={stats.activeSites}
          icon={Building2}
          color="info"
          href="/app/sites"
        />
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
        <h2 className="h2 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <QuickActionCard
            title="Upload Document"
            description="Add a new document to the system"
            href="/app/documents?action=upload"
            icon={Upload}
          />
          <QuickActionCard
            title="View Documents"
            description="Browse all trial documents"
            href="/app/documents"
            icon={FileText}
          />
          <QuickActionCard
            title="Missing Docs"
            description="Track missing & overdue documents"
            href="/app/documents/missing"
            icon={AlertTriangle}
          />
          <QuickActionCard
            title="Ask AI"
            description="Get answers from your documents"
            href="/app/documents?ask=true"
            icon={MessageSquare}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
        <h2 className="h2 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="body-sm font-medium">{activity.title}</p>
                  <p className="text-fg-muted text-sm mt-1">{activity.description}</p>
                  <p className="text-fg-subtle text-xs mt-1">{activity.timestamp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
  trend,
  href,
}: {
  title: string
  value: number
  icon: typeof FileText
  color: 'primary' | 'success' | 'warning' | 'info'
  trend?: string
  href?: string
}) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    info: 'bg-info/10 text-info',
  }

  const content = (
    <div className="rounded-2xl border border-border bg-surface shadow-sm p-6 hover:shadow-md transition-smooth">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="body-sm text-fg-muted mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {trend && (
            <p className="text-xs text-fg-muted mt-2 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {trend}
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}

function QuickActionCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string
  description: string
  href: string
  icon: typeof Upload
}) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-border bg-muted p-4 hover:bg-muted/70 transition-smooth hover:shadow-md hover:border-primary/50"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="h4">{title}</h3>
      </div>
      <p className="body-sm text-fg-muted">{description}</p>
    </Link>
  )
}
