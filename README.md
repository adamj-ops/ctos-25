# CTOS-25

A modern web application built with the **Render Design System** - inspired by [Render.com](https://render.com)'s clean, professional aesthetic.

![Design System](https://img.shields.io/badge/Design%20System-Render-5458EA?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

### 🎨 Comprehensive Design System
- **11-level typography scale** from display-xl (60px) to caption (12px)
- **Indigo/Violet color palette** (#5458EA, #7C3AED)
- **8-point spacing system** for consistent layouts
- **Semantic color tokens** for success, warning, danger, and info states
- **4-level shadow system** from xs to lg
- **Smooth transitions** (150-200ms) with reduced-motion support

### 🧩 UI Components
- 20+ **shadcn/ui components** pre-configured
- **Supabase Platform Kit** integration
- Buttons (primary, secondary, ghost, destructive)
- Cards with gradient headers
- Form elements (inputs, selects, checkboxes, radios)
- Badges and status chips
- Data tables with hover states
- Navigation (navbar, tabs, sidebar)

### 🚀 Tech Stack
- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (UI) & Roboto Mono (Code)
- **Components:** shadcn/ui + Supabase Platform Kit
- **Icons:** Lucide React

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ctos-25

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo homepage.

---

## 📚 Documentation

Comprehensive design system documentation is available in the `.cursor/docs/` directory:

- **[Design System Guide](.cursor/docs/render-design-system.md)** - Complete design system documentation
- **[Quick Reference](.cursor/docs/quick-reference.md)** - Quick lookup for colors, typography, components
- **[Component Examples](.cursor/docs/component-examples.tsx)** - Ready-to-use component code

### Quick Reference

#### Colors
```jsx
// Backgrounds
className="bg-bg"           // #F8FAFC - Main background
className="bg-surface"      // #FFFFFF - Cards
className="bg-muted"        // #F3F5F9 - Subtle backgrounds

// Brand
className="bg-primary"      // #5458EA - Primary actions
className="bg-accent"       // #7C3AED - Accent highlights

// Semantic
className="bg-success"      // #10B981 - Success states
className="bg-warning"      // #F59E0B - Warning states
className="bg-danger"       // #EF4444 - Error states
```

#### Typography
```jsx
<h1>Page Title</h1>                    // 36px, 700
<h2>Section Title</h2>                 // 30px, 700
<h3>Card Title</h3>                    // 24px, 600
<p className="body-lg">Large text</p>  // 18px, 500
<p>Default text</p>                    // 16px, 400
<p className="body-sm">Small text</p>  // 14px, 500
```

#### Components
```jsx
// Primary Button
<button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white hover:shadow-md">
  Click Me
</button>

// Card
<div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
  <h3 className="h3">Card Title</h3>
  <p className="body-sm text-fg-muted">Description</p>
</div>
```

---

## 🎨 Design System

### Color Palette

The design system uses a carefully crafted color palette inspired by Render.com:

| Category | Token | Value | Usage |
|----------|-------|-------|-------|
| Background | `--bg` | #F8FAFC | Main page background |
| Surface | `--surface` | #FFFFFF | Cards, panels |
| Border | `--border` | #E6E8EF | Borders |
| Primary | `--primary-600` | #5458EA | Primary actions |
| Accent | `--accent-600` | #7C3AED | Highlights |
| Success | `--success-500` | #10B981 | Success states |
| Warning | `--warning-500` | #F59E0B | Warning states |
| Danger | `--danger-500` | #EF4444 | Error states |

### Typography

**Font Families:**
- **UI/Body:** Inter
- **Code/Mono:** Roboto Mono

**Type Scale:**
- Display XL: 60px (3.75rem)
- Display LG: 48px (3rem)
- H1: 36px (2.25rem)
- H2: 30px (1.875rem)
- H3: 24px (1.5rem)
- H4: 20px (1.25rem)
- Body LG: 18px (1.125rem)
- Body: 16px (1rem)
- Body SM: 14px (0.875rem)
- Caption: 12px (0.75rem)
- Mono SM: 13px (0.8125rem)

### Spacing

8-point grid system: `0, 8, 12, 16, 20, 24, 32, 40, 48, 64`

---

## 🏗️ Project Structure

```
ctos-25/
├── .cursor/                    # Project documentation
│   ├── docs/                   # Design system docs
│   │   ├── render-design-system.md
│   │   ├── quick-reference.md
│   │   └── component-examples.tsx
│   ├── notes/                  # Project notes
│   │   ├── agentnotes.md
│   │   ├── project_checklist.md
│   │   └── notebook.md
│   ├── rules/                  # Development rules
│   └── tools/                  # Utility tools
├── app/                        # Next.js app directory
│   ├── api/                    # API routes
│   ├── globals.css             # Design system CSS
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/                 # React components
│   ├── ui/                     # shadcn components
│   └── supabase-manager/       # Supabase components
├── lib/                        # Utilities
└── public/                     # Static assets
```

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Design System Utilities

The design system provides several utility classes:

```css
/* Gradients */
.gradient-brand     /* Indigo to Violet gradient */
.gradient-soft      /* Subtle indigo gradient */

/* Shadows */
.shadow-xs          /* Subtle */
.shadow-sm          /* Small */
.shadow-md          /* Medium */
.shadow-lg          /* Large */

/* Transitions */
.transition-smooth       /* 150ms ease-out */
.transition-smooth-slow  /* 200ms ease-out */

/* Focus */
.focus-ring         /* Standard focus ring */
```

---

## ♿ Accessibility

This design system is built with accessibility in mind:

- ✅ WCAG 2.1 AA compliant color contrasts
- ✅ Semantic HTML structure
- ✅ Focus indicators on all interactive elements
- ✅ Keyboard navigation support
- ✅ Respects `prefers-reduced-motion`
- ✅ ARIA labels where appropriate

---

## 🌙 Dark Mode

Dark mode foundation is included. To enable:

```jsx
<html className="dark">
  {/* Your app */}
</html>
```

Dark mode colors are pre-configured in `globals.css`.

---

## 📦 Installed Packages

### Core
- `next` 15.5.4
- `react` 19.1.0
- `typescript` 5

### UI & Styling
- `tailwindcss` 4
- `@radix-ui/*` (shadcn components)
- `lucide-react` (icons)
- `class-variance-authority`
- `tailwind-merge`

### Forms & Data
- `react-hook-form`
- `zod`
- `@tanstack/react-table`
- `@tanstack/react-query`

### Supabase
- `@monaco-editor/react`
- `axios`
- `openai`

---

## 🎯 Roadmap

- [x] Design system implementation
- [x] Core UI components
- [x] Demo homepage
- [ ] Dark mode toggle
- [ ] Dashboard page
- [ ] Supabase configuration
- [ ] Authentication flow
- [ ] Additional page templates
- [ ] Component storybook

---

## 📄 License

[Your License Here]

---

## 🙏 Acknowledgments

- Design inspiration from [Render.com](https://render.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Typography from [Inter](https://rsms.me/inter/) & [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- Icons from [Lucide](https://lucide.dev)

---

## 📞 Support

For questions or issues, please refer to the documentation in `.cursor/docs/` or contact the development team.

---

**Built with ❤️ using the Render Design System**