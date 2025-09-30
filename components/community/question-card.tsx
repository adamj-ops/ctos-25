'use client'

import React from 'react'
import Link from 'next/link'
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react'
import { Question } from '@/types/question'
import { formatRelativeTime } from '@/lib/utils/dateUtils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface QuestionCardProps {
  question: Question
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Link href={`/app/community/questions/${question.id}`}>
      <Card className="hover:shadow-md transition-all duration-200 cursor-pointer">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">
            {question.title}
          </h3>
          <p className="text-sm text-fg-muted line-clamp-2 mb-3">
            {question.excerpt}
          </p>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="secondary">{question.category}</Badge>
            <div className="flex items-center gap-1 text-xs">
              <span className="font-medium">{question.author.name}</span>
              <Badge variant="outline" className="text-xs">
                {question.author.role}
              </Badge>
            </div>
            {question.site && (
              <span className="text-xs text-fg-muted">{question.site}</span>
            )}
          </div>
          <div className="flex items-center text-xs text-fg-muted gap-4">
            <div className="flex items-center">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span>{question.answerCount}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-3.5 w-3.5 mr-1" />
              <span>{question.upvotes}</span>
            </div>
            <div className="flex items-center ml-auto">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{formatRelativeTime(question.createdAt)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
