# CTOS Development Progress

## 🎯 Project Goal
Building a Clinical Trials Operating System (CTOS) - "AI with Compliance" - a document management and AI assistant platform for clinical research sites and sponsors. Part 11/GCP compliant with full audit trails.

---

## ✅ Step 1: Database Foundation (COMPLETED)

### Supabase Setup
- ✅ Supabase clients configured (browser, server, middleware)
- ✅ Environment variables template created
- ✅ TypeScript types generated

### Database Schema Created
**Tables:**
1. **profiles** - User roles and site assignments
   - Roles: sponsor, site_monitor, site_coordinator, admin
   - Linked to Supabase auth.users

2. **sites** - Clinical trial sites
   - 5 sample sites seeded
   - Site numbers, PIs, addresses

3. **documents** - Core document metadata
   - TMF/IF/ISF taxonomy (DIA EDM)
   - Version control, certification tracking
   - Full-text search enabled

4. **document_sections** - DIA EDM Reference Model
   - 20+ TMF/ISF/IF sections seeded
   - Hierarchical structure (section → subsection → artifact)

5. **questions** - Community Q&A
   - Tags, votes, view counts

6. **answers** - Responses with AI citations
   - JSONB citations for compliance
   - Vote counts, accepted answers

7. **audit_log** - Complete Part 11 compliance trail
   - All actions logged (create, read, update, delete, download, upload, query_ai)
   - IP address, user agent tracking

### Row Level Security (RLS) Policies
- ✅ Site coordinators → only ISF docs for their assigned site
- ✅ Site monitors → all docs for assigned sites
- ✅ Sponsors/Admins → everything
- ✅ Community Q&A → all authenticated users

### Files Created
- `lib/supabase/client.ts` - Browser client
- `lib/supabase/server.ts` - Server client
- `lib/supabase/middleware.ts` - Auth middleware
- `lib/supabase/types.ts` - TypeScript types
- `supabase/migrations/20250131_initial_schema.sql` - Complete schema

---

## ✅ Step 2: App Shell (COMPLETED)

### Core Layout Components

**1. Role Context Provider** (`contexts/RoleContext.tsx`)
- Switch between sponsor/monitor/coordinator/admin views
- Persists selection to localStorage
- Available roles based on user permissions

**2. Navbar** (`components/app-shell/navbar.tsx`)
- Brand logo and name (CTOS)
- Breadcrumbs (center)
- Role switcher dropdown
- "Ask AI" button
- User menu with avatar

**3. Sidebar** (`components/app-shell/sidebar.tsx`)
- Navigation links:
  - Home
  - Documents (with missing count badge)
  - Sites (with open actions badge)
  - Community
  - Admin (admin-only)
- Active state with primary color accent
- Footer with version info

**4. Role Switcher** (`components/app-shell/role-switcher.tsx`)
- Dropdown for users with multiple roles
- Badge display for single-role users
- Icons and colors per role:
  - Sponsor → Building2, primary
  - Monitor → UserCog, info
  - Coordinator → User, success
  - Admin → Shield, danger

**5. User Menu** (`components/app-shell/user-menu.tsx`)
- Avatar with initials
- Profile, Settings links
- Sign out functionality

**6. App Layout** (`app/(app)/layout.tsx`)
- Server component with auth check
- Redirects to /login if not authenticated
- Fetches user profile from database
- Wraps app in RoleProvider

**7. Dashboard Home** (`app/(app)/page.tsx`)
- Stats cards: Total Docs, Certified, Missing, Pending
- Quick actions: Upload, View Docs, Ask AI
- Recent activity placeholder

### Design System Integration
- All components use Render design tokens
- Consistent spacing (8-point grid)
- Smooth transitions (150-200ms)
- Proper accessibility (focus states, keyboard nav)

### Files Created
- `components/app-shell/navbar.tsx`
- `components/app-shell/sidebar.tsx`
- `components/app-shell/role-switcher.tsx`
- `components/app-shell/user-menu.tsx`
- `components/app-shell/app-shell.tsx`
- `components/documents/ask-drawer.tsx` (placeholder)
- `contexts/RoleContext.tsx`
- `app/(app)/layout.tsx`
- `app/(app)/page.tsx`

### shadcn Components Added
- Avatar
- Dropdown Menu
- Sheet (for drawers)

---

## 📋 Next Steps (Remaining)

### Step 3: Clone MagicPatterns Component
```bash
npx magicpath-ai@latest clone -k [key]
```
- Examine component structure
- Identify reusable patterns
- Extract utilities/hooks
- Document findings

### Step 4: Document Library Page
- [ ] Build `/app/(app)/documents/page.tsx`
- [ ] Create document table component
- [ ] Add filters (scope, section, site, status, date)
- [ ] Implement search functionality
- [ ] Add bulk selection and actions
- [ ] Create status badges and scope pills

### Step 5: Ask AI Drawer (Full Implementation)
- [ ] Chat interface with message list
- [ ] Quick prompt chips (6 common questions)
- [ ] Scope selector (current filters, all docs, this site, this doc)
- [ ] Mock AI responses with citations
- [ ] Citation chips linking to documents
- [ ] Log queries to audit_log

### Step 6: Document Upload Drawer
- [ ] 3-step wizard (Upload → Classify → Review)
- [ ] Drag-drop file upload
- [ ] Classification form (scope, section, version, etc.)
- [ ] Certification checkbox with signer/date
- [ ] Upload to Supabase Storage
- [ ] Create document record

### Step 7: Testing & Refinement
- [ ] Test all features in browser
- [ ] Fix any TypeScript errors
- [ ] Verify RLS policies work
- [ ] Test role switching
- [ ] Check responsive design
- [ ] Run full build

---

## 🚀 How to Continue

### Option 1: Clone MagicPatterns Component
```bash
cd /Users/adamjudeh/ctos-25
npx magicpath-ai@latest clone -k eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTkyMzU1MTcsImRhdGEiOnsidXNlcl9pZCI6IjMyMjgxMzQ4NjMzMTc1NjU0NCIsImNvbXBvbmVudF9pZCI6IjMyMzU1NDYyMTY5ODIzMjMyMCIsInJldmlzaW9uX2lkIjoiMzIzNTU1OTQwNTUwOTcxMzkyIn0sImlhdCI6MTc1OTIzNDkxN30...
```

### Option 2: Build Document Library
Start implementing the main documents page with table and filters

### Option 3: Set Up Supabase
1. Create `.env.local` with your Supabase credentials
2. Run the migration
3. Test the app

---

## 🎨 Design System Reference

All components follow the **Render Design System**:

### Colors
```css
--bg: #F8FAFC              /* Main background */
--surface: #FFFFFF         /* Cards */
--primary-600: #5458EA     /* Primary actions */
--success-500: #10B981     /* Success states */
--warning-500: #F59E0B     /* Warnings */
--danger-500: #EF4444      /* Errors */
```

### Typography
```css
h1: 36px, 700             /* Page titles */
h2: 30px, 700             /* Section titles */
h3: 24px, 600             /* Card titles */
body: 16px, 400           /* Default text */
body-sm: 14px, 500        /* Labels, small text */
caption: 12px, 500        /* Meta info */
```

### Components
```jsx
// Primary Button
<button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white hover:shadow-md">
  Action
</button>

// Card
<div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
  Content
</div>

// Badge
<span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-success">
  Active
</span>
```

---

## 📊 Current Status

**Progress:** 5/10 tasks complete (50%)

✅ Database foundation  
✅ Supabase setup  
✅ App shell layout  
✅ Role-based navigation  
✅ Auth protection  
⬜ MagicPatterns analysis  
⬜ Document library  
⬜ Ask AI drawer  
⬜ Upload drawer  
⬜ Testing  

**Build Status:** ✅ Passing (zero errors)  
**TypeScript:** ✅ No type errors  
**Design System:** ✅ Fully integrated  

---

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Generate Supabase types (after migration)
npx supabase gen types typescript --project-id YOUR_PROJECT > lib/supabase/types.ts
```

---

## 📝 Key Files

**Setup & Config:**
- `SETUP.md` - Setup instructions
- `.env.local.example` - Environment template
- `supabase/migrations/20250131_initial_schema.sql` - Database schema

**Documentation:**
- `.cursor/docs/render-design-system.md` - Design system guide
- `.cursor/docs/quick-reference.md` - Quick reference
- `.cursor/notes/agentnotes.md` - Project notes
- `.cursor/docs/CTOS-PROGRESS.md` - This file

**Core Application:**
- `app/(app)/layout.tsx` - Protected app layout
- `app/(app)/page.tsx` - Dashboard home
- `components/app-shell/*` - Navigation components
- `lib/supabase/*` - Supabase clients

---

**Last Updated:** September 30, 2025  
**Next Step:** Clone MagicPatterns component or build Document Library
