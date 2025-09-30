export interface Question {
  id: string
  title: string
  excerpt: string
  body?: string
  category: string
  author: {
    id: string
    name: string
    role: string
  }
  site?: string
  createdAt: string
  upvotes: number
  answerCount: number
  hasAIAnswer?: boolean
}
