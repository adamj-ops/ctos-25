import { createClient } from '@/lib/supabase/server'
import { FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

export default async function AppHomePage() {
  const supabase = await createClient()

  // Fetch dashboard stats
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

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="h1 mb-2">Welcome back!</h1>
        <p className="body-lg text-fg-muted">
          Here&apos;s what&apos;s happening with your clinical trial documents.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Documents"
          value={totalDocs || 0}
          icon={FileText}
          color="primary"
        />
        <StatCard
          title="Certified Copies"
          value={certifiedDocs || 0}
          icon={CheckCircle}
          color="success"
        />
        <StatCard
          title="Missing Documents"
          value={missingDocs || 0}
          icon={AlertTriangle}
          color="warning"
        />
        <StatCard
          title="Pending Review"
          value={0}
          icon={Clock}
          color="info"
        />
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
        <h2 className="h2 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickActionCard
            title="Upload Document"
            description="Add a new document to the system"
            href="/app/documents?action=upload"
          />
          <QuickActionCard
            title="View Documents"
            description="Browse all trial documents"
            href="/app/documents"
          />
          <QuickActionCard
            title="Ask AI"
            description="Get answers from your documents"
            href="/app/documents?ask=true"
          />
        </div>
      </div>

      {/* Recent Activity - Placeholder */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
        <h2 className="h2 mb-4">Recent Activity</h2>
        <p className="text-fg-muted body-sm">No recent activity to display.</p>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string
  value: number
  icon: typeof FileText
  color: 'primary' | 'success' | 'warning' | 'info'
}) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    info: 'bg-info/10 text-info',
  }

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="body-sm text-fg-muted mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

function QuickActionCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <a
      href={href}
      className="rounded-xl border border-border bg-muted p-4 hover:bg-muted/70 transition-smooth hover:shadow-md"
    >
      <h3 className="h4 mb-1">{title}</h3>
      <p className="body-sm text-fg-muted">{description}</p>
    </a>
  )
}
