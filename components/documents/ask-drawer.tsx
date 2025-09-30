'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

interface AskAIDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AskAIDrawer({ open, onOpenChange }: AskAIDrawerProps) {
  // Placeholder - will be fully implemented in Step 8
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>Ask CTOS AI</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <p className="text-fg-muted">AI Assistant coming soon...</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
