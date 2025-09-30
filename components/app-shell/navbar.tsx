'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, ChevronRight } from 'lucide-react'
import { RoleSwitcher } from './role-switcher'
import { UserMenu } from './user-menu'
import Link from 'next/link'

interface NavbarProps {
  userEmail: string
  userRole: string
  onAskAI: () => void
}

export function Navbar({ userEmail, userRole, onAskAI }: NavbarProps) {
  return (
    <nav className="h-16 border-b border-border bg-surface shadow-sm fixed top-0 left-0 right-0 z-40">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">CTOS</span>
          </Link>
        </div>

        {/* Center: Breadcrumbs */}
        <div className="hidden md:flex items-center gap-2 text-sm text-fg-muted">
          <Link href="/documents" className="hover:text-foreground transition-smooth">
            Documents
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">All Documents</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Button
            onClick={onAskAI}
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>

          <RoleSwitcher />
          <UserMenu userEmail={userEmail} />
        </div>
      </div>
    </nav>
  )
}
