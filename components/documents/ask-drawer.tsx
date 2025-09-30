'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sparkles, Send, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  role: 'user' | 'ai'
  content: string
  citations?: Array<{
    document_id: string
    document_name: string
    version: string
    page?: number
  }>
}

interface AskAIDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Quick prompts based on CTOS use cases
const quickPrompts = [
  "Is my site PI's medical license expired?",
  'What documents are missing for Site 101?',
  'Show all SAE reports from last month',
  'Which sites have incomplete ISF?',
  'List all protocol amendments',
  'Find ICF version history',
]

export function AskAIDrawer({ open, onOpenChange }: AskAIDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [scope, setScope] = useState('current')
  const [isLoading, setIsLoading] = useState(false)

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (in production, call your AI API)
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'ai',
        content: `Based on the documents I've analyzed, here's what I found regarding your query about "${input}". This information is sourced from the current protocol and related regulatory documents in your system.`,
        citations: [
          {
            document_id: 'doc-123',
            document_name: 'Study Protocol',
            version: 'v2.1',
            page: 5,
          },
          {
            document_id: 'doc-456',
            document_name: 'Investigator Brochure',
            version: 'v3.0',
            page: 12,
          },
        ],
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)

      // TODO: Log to audit_log table
      // await supabase.from('audit_log').insert({
      //   user_id: user.id,
      //   action: 'query_ai',
      //   resource_type: 'ai_query',
      //   details: { query: input, scope }
      // })
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-2xl p-0 flex flex-col">
        {/* Header */}
        <SheetHeader className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <SheetTitle className="h3">Ask CTOS AI</SheetTitle>
            </div>
            <Select value={scope} onValueChange={setScope}>
              <SelectTrigger className="w-[160px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Filters</SelectItem>
                <SelectItem value="all">All Documents</SelectItem>
                <SelectItem value="site">This Site</SelectItem>
                <SelectItem value="document">This Document</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SheetHeader>

        {/* Quick Prompts */}
        <div className="p-4 border-b border-border bg-muted/30">
          <h4 className="body-sm font-semibold mb-2">Quick Prompts</h4>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                className="caption bg-surface text-fg-muted hover:text-foreground px-2.5 py-1 rounded-full border border-border transition-smooth hover:border-primary hover:bg-primary/5"
                onClick={() => handleQuickPrompt(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="h3 mb-2">Ask anything about your documents</h3>
              <p className="body-sm text-fg-muted max-w-md">
                Get instant answers about protocols, site requirements, or document status without digging through files.
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="body-sm">{message.content}</p>

                  {/* AI Citations */}
                  {message.role === 'ai' && message.citations && (
                    <div className="mt-3 space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {message.citations.map((citation, citationIndex) => (
                          <button
                            key={citationIndex}
                            className="inline-flex items-center bg-surface text-primary caption rounded-lg px-2.5 py-1 border border-border hover:bg-primary/10 transition-smooth"
                          >
                            <FileText className="h-3 w-3 mr-1" />
                            {citation.document_name} • {citation.version}
                            {citation.page && ` • Page ${citation.page}`}
                          </button>
                        ))}
                      </div>
                      <div className="flex space-x-2 pt-1">
                        <button className="caption bg-surface hover:bg-muted px-2.5 py-1 rounded-lg border border-border transition-smooth">
                          Open Document
                        </button>
                        <button className="caption bg-surface hover:bg-muted px-2.5 py-1 rounded-lg border border-border transition-smooth">
                          View All Results
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-muted">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-fg-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-fg-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-fg-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="caption text-fg-muted">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about your documents..."
                className="w-full h-20 rounded-xl border border-border bg-surface px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none resize-none"
                disabled={isLoading}
              />
              <p className="caption text-fg-subtle mt-1">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="h-10 w-10 p-0 rounded-xl"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
