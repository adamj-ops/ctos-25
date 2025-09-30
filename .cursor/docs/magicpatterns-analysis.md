# MagicPatterns Component Analysis

## Overview
The prototype provides a complete CTOS UI with React Router. We'll adapt it to Next.js App Router with our Render design system and Supabase backend.

## Key Components to Adapt

### ✅ Already Built (Our Version)
1. **AppShell** → Our app shell with navbar, sidebar
2. **RoleSwitcher** → Already implemented
3. **UserRoleContext** → Our RoleContext.tsx

### 🔄 Components to Build

#### Document Management
1. **DocumentLibrary** - Main documents page with tabs and filters
2. **DocumentTable** - Table with sorting, selection, bulk actions
3. **DocumentFilters** - Filter bar (scope, section, site, status, date)
4. **DocumentDetail** - Document view with tabs (preview, metadata, history, activity)

#### AI Features
5. **AskAIDrawer** - Already have placeholder, need full implementation
   - Quick prompts (6 suggestions)
   - Chat interface with citations
   - Scope selector

#### Community
6. **CommunityFeed** - Q&A feed with filters
7. **QuestionCard** - Question display in grid
8. **QuestionDetail** - Full question with answers
9. **AskQuestionModal** - Create new question

#### Sites
10. **SitesOverview** - Sites grid with enrollment stats
11. **SiteCard** - Individual site info card
12. **SiteRoom** - Chat interface for site-specific discussions

## Design Patterns to Use

### Status Badges
```jsx
// Their version uses conditionals
// Adapt to our Render design system tokens

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'current': return 'bg-primary-500/10 text-primary-600 border-primary/30'
    case 'certified': return 'bg-success/10 text-success-600 border-success/30'
    case 'superseded': return 'bg-warning/10 text-warning-600 border-warning/30'
    case 'missing': return 'bg-danger/10 text-danger-600 border-danger/30'
  }
}
```

### Tables
- Use our `rounded-2xl` for cards
- `body-sm` for table headers
- `hover:bg-muted` for rows
- Sticky header pattern they use is good

### Filters
- Keep the collapsible filter pattern
- Use our form input styles (h-9, rounded-xl)
- Active filter chips with X to remove

## Next.js Adaptations

### Route Structure
```
app/(app)/
├── page.tsx (Dashboard - adapt CoordinatorDashboard if coordinator)
├── documents/
│   ├── page.tsx (DocumentLibrary)
│   ├── [id]/
│   │   └── page.tsx (DocumentDetail)
│   └── missing/
│       └── page.tsx (MissingDocuments)
├── sites/
│   └── page.tsx (SitesOverview)
├── community/
│   ├── page.tsx (CommunityFeed)
│   ├── questions/
│   │   └── [id]/
│   │       └── page.tsx (QuestionDetail)
│   ├── rooms/
│   │   └── [siteId]/
│   │       └── page.tsx (SiteRoom)
│   └── knowledge/
│       └── page.tsx (KnowledgeBase)
└── admin/
    ├── tmf/
    │   └── page.tsx (TMFStructure)
    └── audit/
        └── page.tsx (AuditTrail)
```

### Replace Mock Data with Supabase
- mockDocuments → Query `documents` table
- mockSites → Query `sites` table
- mockQuestions → Query `questions` table
- mockQuestionDetails → Join queries + answers

## Implementation Priority

1. **Document Library** (Step 4) - NEXT
   - Build page with real Supabase data
   - Tabs, filters, table
   - Use Render design tokens
   
2. **Ask AI Drawer** (Step 5)
   - Adapt their chat UI
   - Add scope selector
   - Mock responses with citations
   - Log to audit_log

3. **Document Upload** (Step 6)
   - 3-step wizard
   - File upload to Supabase Storage
   - Classification form

4. **Community Features** (Later)
   - Questions feed
   - Site rooms
   - Knowledge base

## Key Utilities to Adapt

### formatRelativeTime
```typescript
// They have this - we'll use it
export function formatRelativeTime(dateString: string): string {
  // Convert to "2 hours ago", "3 days ago", etc.
}
```

### cn utility
```typescript
// Already have in lib/utils.ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Design System Mapping

### Their Colors → Our Render Tokens
- `bg-primary` → Keep (we use primary)
- `bg-blue-100 text-blue-700` → `bg-info/10 text-info-600`
- `bg-green-100 text-green-700` → `bg-success/10 text-success-600`
- `bg-amber-100 text-amber-700` → `bg-warning/10 text-warning-600`
- `bg-red-100 text-red-700` → `bg-danger/10 text-danger-600`

### Typography
- They use Tailwind defaults
- We use Render scale (h1, h2, h3, body-sm, caption)

### Spacing
- They use standard Tailwind spacing
- We use 8-point grid (matches well!)

## Notes

- Great patterns for empty states
- Good use of badges and pills
- Chat UI is well done
- Filter UX is solid
- Will adapt to our Render aesthetic (cleaner, more spacious)
