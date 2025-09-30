import { Database } from '@/lib/supabase/types'

type DocumentScope = Database['public']['Enums']['document_scope']

interface ScopePillProps {
  scope: DocumentScope
}

export function ScopePill({ scope }: ScopePillProps) {
  const config = {
    TMF: {
      label: 'TMF',
      classes: 'bg-info/10 text-info-600 border-info/30',
      title: 'Trial Master File',
    },
    IF: {
      label: 'IF',
      classes: 'bg-accent-500/10 text-accent-600 border-accent/30',
      title: 'Informed Consent File',
    },
    ISF: {
      label: 'ISF',
      classes: 'bg-success/10 text-success-600 border-success/30',
      title: 'Investigator Site File',
    },
  }

  const { label, classes, title } = config[scope]

  return (
    <span
      className={`inline-flex items-center rounded-lg border px-2.5 py-1 caption font-semibold ${classes}`}
      title={title}
    >
      {label}
    </span>
  )
}
