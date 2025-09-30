'use client'

import { Home, FileText, Building2, MessageSquare, Settings, BarChart3, AlertTriangle, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface NavItem {
  title: string
  href: string
  icon: typeof Home
  badge?: number
  adminOnly?: boolean
  coordinatorOnly?: boolean
  sponsorOnly?: boolean
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/app',
    icon: Home,
  },
  {
    title: 'Documents',
    href: '/app/documents',
    icon: FileText,
    badge: 12, // Dynamic: missing documents count
  },
  {
    title: 'Missing Docs',
    href: '/app/documents/missing',
    icon: AlertTriangle,
    badge: 5,
  },
  {
    title: 'Sites',
    href: '/app/sites',
    icon: Building2,
    badge: 3, // Dynamic: open actions count
    sponsorOnly: true,
  },
  {
    title: 'Reports',
    href: '/app/reports',
    icon: BarChart3,
    sponsorOnly: true,
  },
  {
    title: 'Community',
    href: '/app/community',
    icon: MessageSquare,
  },
  {
    title: 'Knowledge Base',
    href: '/app/knowledge-base',
    icon: BookOpen,
  },
  {
    title: 'Admin',
    href: '/app/admin',
    icon: Settings,
    adminOnly: true,
  },
]

interface SidebarProps {
  userRole: string
}

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname()

  const filteredNavItems = navItems.filter(item => {
    if (item.adminOnly && userRole !== 'admin') return false
    if (item.sponsorOnly && userRole === 'site_coordinator') return false
    if (item.coordinatorOnly && userRole !== 'site_coordinator') return false
    return true
  })

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-70 border-r border-border bg-surface z-30">
      <nav className="p-4 space-y-1">
        {filteredNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-smooth group",
                isActive
                  ? "bg-primary/10 text-foreground border-l-4 border-l-primary pl-[8px]"
                  : "text-fg-muted hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-smooth",
                isActive ? "text-primary" : "text-fg-muted group-hover:text-foreground"
              )} />
              <span className="body-sm font-medium flex-1">{item.title}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <Badge 
                  variant={isActive ? "default" : "secondary"}
                  className="ml-auto"
                >
                  {item.badge}
                </Badge>
              )}
            </Link>
          )
        })}
      </nav>
      
      {/* Sidebar footer - could add help, docs, etc. */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
        <div className="text-xs text-fg-subtle">
          <p className="font-medium">CTOS v1.0</p>
          <p className="mt-1">Clinical Trials OS</p>
        </div>
      </div>
    </aside>
  )
}
