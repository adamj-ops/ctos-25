'use client'

import React, { useState } from 'react'
import { Search, Plus, FileQuestion } from 'lucide-react'
import { mockQuestions } from '@/lib/data/mockQuestions'
import QuestionCard from '@/components/community/question-card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
  'All',
  'Document Requirements',
  'Regulatory',
  'Protocol',
  'Safety Reporting',
  'Site Management',
]

export default function CommunityFeed() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showMyQuestions, setShowMyQuestions] = useState(false)
  const [showUnanswered, setShowUnanswered] = useState(false)

  // Filter questions based on selected filters
  const filteredQuestions = mockQuestions.filter((question) => {
    if (
      searchQuery &&
      !question.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }
    if (selectedCategory !== 'All' && question.category !== selectedCategory) {
      return false
    }
    if (showMyQuestions && question.author.id !== 'current-user') {
      return false
    }
    if (showUnanswered && question.answerCount > 0) {
      return false
    }
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Community Q&A</h1>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-muted" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Ask Question
          </Button>
        </div>
      </div>

      {/* Filter row */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-border text-primary focus:ring-primary"
              checked={showMyQuestions}
              onChange={() => setShowMyQuestions(!showMyQuestions)}
            />
            <span>My Questions</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-border text-primary focus:ring-primary"
              checked={showUnanswered}
              onChange={() => setShowUnanswered(!showUnanswered)}
            />
            <span>Unanswered</span>
          </label>
        </div>
      </div>

      {/* Question feed */}
      {filteredQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center space-y-4">
            <FileQuestion className="h-16 w-16 text-fg-muted" />
            <h3 className="text-xl font-semibold">No questions yet</h3>
            <p className="text-fg-muted max-w-md">
              Be the first to ask about documents, protocols, or site procedures
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Ask Question
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
