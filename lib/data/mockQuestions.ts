import { Question } from '@/types/question'

export const mockQuestions: Question[] = [
  {
    id: 'q-001',
    title: 'Is site PI medical license required in ISF?',
    excerpt:
      'We are setting up a new site and I need to know if the PI medical license is required to be included in the Investigator Site File.',
    category: 'Document Requirements',
    author: {
      id: 'current-user',
      name: 'Sarah Johnson',
      role: 'Site Coordinator',
    },
    site: 'Site 101 - New York',
    createdAt: '2023-06-15T14:32:00Z',
    upvotes: 24,
    answerCount: 5,
    hasAIAnswer: true,
  },
  {
    id: 'q-002',
    title: 'How to document protocol deviation for missed visit window?',
    excerpt:
      'Patient missed their Week 12 visit by 5 days (outside the visit window). What is the correct procedure for documenting this protocol deviation?',
    category: 'Protocol',
    author: {
      id: 'user-002',
      name: 'Michael Chen',
      role: 'CRA',
    },
    site: 'Site 103 - Chicago',
    createdAt: '2023-06-18T09:15:00Z',
    upvotes: 18,
    answerCount: 3,
    hasAIAnswer: true,
  },
  {
    id: 'q-003',
    title: 'Can informed consent be signed electronically?',
    excerpt:
      'Our site is considering implementing electronic informed consent. Is this acceptable for this study? What are the requirements?',
    category: 'Regulatory',
    author: {
      id: 'user-003',
      name: 'Emily Rodriguez',
      role: 'Site Coordinator',
    },
    site: 'Site 102 - Los Angeles',
    createdAt: '2023-06-20T16:45:00Z',
    upvotes: 32,
    answerCount: 7,
    hasAIAnswer: true,
  },
]
