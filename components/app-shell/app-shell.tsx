'use client'

import { useState } from 'react'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { AskAIDrawer } from '@/components/documents/ask-drawer'

interface AppShellProps {
  children: React.ReactNode
  userEmail: string
  userRole: string
}

export function AppShell({ children, userEmail, userRole }: AppShellProps) {
  const [isAskAIOpen, setIsAskAIOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <Navbar
        userEmail={userEmail}
        userRole={userRole}
        onAskAI={() => setIsAskAIOpen(true)}
      />

      {/* Sidebar */}
      <Sidebar userRole={userRole} />

      {/* Main Content */}
      <main className="ml-70 mt-16 min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
          {children}
        </div>
      </main>

      {/* Global Ask AI Drawer */}
      <AskAIDrawer open={isAskAIOpen} onOpenChange={setIsAskAIOpen} />
    </>
  )
}
