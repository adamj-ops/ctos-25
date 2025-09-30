import { CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react'
import { Database } from '@/lib/supabase/types'

type DocumentStatus = Database['public']['Enums']['document_status']

interface StatusBadgeProps {
  status: DocumentStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    current: {
      label: 'Current',
      icon: FileText,
      classes: 'bg-primary-500/10 text-primary-600 border-primary/30',
    },
    certified: {
      label: 'Certified',
      icon: CheckCircle,
      classes: 'bg-success/10 text-success-600 border-success/30',
    },
    superseded: {
      label: 'Superseded',
      icon: Clock,
      classes: 'bg-warning/10 text-warning-600 border-warning/30',
    },
    missing: {
      label: 'Missing',
      icon: AlertCircle,
      classes: 'bg-danger/10 text-danger-600 border-danger/30',
    },
  }

  const { label, icon: Icon, classes } = config[status]

  return (
    <span className={`inline-flex items-center rounded-lg border px-2.5 py-1 caption font-medium ${classes}`}>
      <Icon className="h-3 w-3 mr-1" />
      {label}
    </span>
  )
}
