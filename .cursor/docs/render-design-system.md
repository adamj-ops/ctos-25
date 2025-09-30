# Render Design System Documentation

> **Version:** 1.0.0  
> **Last Updated:** September 30, 2025  
> **Based on:** [Render.com](https://render.com) design language

---

## Table of Contents

1. [Overview](#overview)
2. [Typography](#typography)
3. [Color System](#color-system)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animations & Interactions](#animations--interactions)
7. [Usage Examples](#usage-examples)

---

## Overview

This design system is inspired by Render.com's clean, modern aesthetic featuring:
- **Calm white surfaces** with subtle gray backgrounds
- **Cool gray borders** for gentle separation
- **Indigo/Violet primary colors** as the signature look
- **8-point spacing system** for consistency
- **Inter & Roboto Mono** typography

### Core Principles

1. **Clarity over complexity** - Clean, readable interfaces
2. **Purposeful color** - Use color to guide and inform
3. **Consistent spacing** - 8-point grid system
4. **Smooth interactions** - Subtle animations and transitions
5. **Accessibility first** - WCAG 2.1 AA compliant

---

## Typography

### Font Families

```css
/* UI / Body Text */
font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

/* Code / Numerals */
font-family: 'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
```

### Type Scale

| Class | Size (rem/px) | Weight | Line Height | Letter Spacing | Usage |
|-------|---------------|--------|-------------|----------------|-------|
| `.display-xl` | 3.75 / 60px | 700 | 1.05 | -0.02em | Hero titles |
| `.display-lg` | 3.0 / 48px | 700 | 1.08 | -0.02em | Large headlines |
| `.h1` | 2.25 / 36px | 700 | 1.15 | -0.01em | Page titles |
| `.h2` | 1.875 / 30px | 700 | 1.2 | -0.01em | Section titles |
| `.h3` | 1.5 / 24px | 600 | 1.25 | -0.005em | Card titles |
| `.h4` | 1.25 / 20px | 600 | 1.35 | 0 | Subsection titles |
| `.body-lg` | 1.125 / 18px | 500 | 1.55 | 0 | Large body text |
| `.body` / `p` | 1.0 / 16px | 400 | 1.6 | 0 | Default body text |
| `.body-sm` | 0.875 / 14px | 500 | 1.55 | 0 | Small text, labels |
| `.caption` | 0.75 / 12px | 500 | 1.4 | 0.01em | Meta info, badges |
| `.mono-sm` / `code` | 0.8125 / 13px | 500 | 1.4 | 0 | Code snippets |

### Usage Guidelines

- **Page Title:** Use `h1` for main page headings
- **Section Title:** Use `h2` for major sections
- **Card Title:** Use `h3` for card headers
- **Table Headers & Button Labels:** Use `.body-sm` with 500-600 weight
- **Meta Information:** Use `.caption` for badges, chip text

---

## Color System

### Base Colors

```css
/* Backgrounds */
--bg: #F8FAFC;           /* Main background (slate-50) */
--surface: #FFFFFF;       /* Card/panel backgrounds */
--border: #E6E8EF;        /* Borders (slate-200) */
--muted: #F3F5F9;         /* Muted backgrounds (slate-100) */

/* Text */
--fg: #0F172A;            /* Primary text (slate-900) */
--fg-muted: #475569;      /* Secondary text (slate-600) */
--fg-subtle: #64748B;     /* Tertiary text (slate-500) */
```

### Brand Colors

```css
/* Primary (Indigo) */
--primary-500: #6366F1;
--primary-600: #5458EA;   /* Default primary */
--primary-700: #3F46D6;

/* Accent (Violet) */
--accent-500: #8B5CF6;
--accent-600: #7C3AED;    /* Default accent */
```

### Semantic Colors

```css
/* Success (Green) */
--success-500: #10B981;
--success-600: #059669;

/* Warning (Amber) */
--warning-500: #F59E0B;
--warning-600: #D97706;

/* Danger (Red) */
--danger-500: #EF4444;
--danger-600: #DC2626;

/* Info (Cyan) */
--info-500: #0EA5E9;
--info-600: #0284C7;
```

### Tailwind Classes

```jsx
// Backgrounds
className="bg-bg"          // Main background
className="bg-surface"     // White cards
className="bg-muted"       // Subtle background

// Text
className="text-foreground"   // Primary text
className="text-fg-muted"     // Secondary text
className="text-fg-subtle"    // Tertiary text

// Brand
className="bg-primary text-white"     // Primary button
className="bg-accent text-white"      // Accent button

// Semantic
className="bg-success text-white"     // Success state
className="bg-warning text-white"     // Warning state
className="bg-danger text-white"      // Error state
className="bg-info text-white"        // Info state

// Borders
className="border border-border"      // Standard border
```

### Gradients

```css
/* Brand Gradient - For hero sections, highlight chips */
.gradient-brand {
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--accent-600) 100%);
}

/* Soft Gradient - For card headers, empty states */
.gradient-soft {
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.06) 0%, rgba(99, 102, 241, 0) 100%);
}
```

### Shadows

```css
--shadow-xs: 0 1px 2px rgba(2, 6, 23, 0.04);
--shadow-sm: 0 2px 8px rgba(2, 6, 23, 0.06);
--shadow-md: 0 6px 20px rgba(2, 6, 23, 0.08);
--shadow-lg: 0 12px 32px rgba(2, 6, 23, 0.12);
```

---

## Spacing & Layout

### 8-Point System

Use these spacing tokens for margins, padding, and gaps:

```
0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64
```

In Tailwind: `p-0, p-0.5, p-1, p-1.5, p-2, p-3, p-4, p-5, p-6, p-8, p-10, p-12, p-16`

### Component Spacing

```css
/* Buttons */
button-sm: padding: 8px 12px;   /* h-8 px-3 */
button-md: padding: 10px 16px;  /* h-9 px-4 */
button-lg: padding: 12px 20px;  /* h-10 px-5 */

/* Cards */
card-padding: 16-24px;          /* p-4 to p-6 */

/* Drawers/Modals */
modal-padding: 24-32px;         /* p-6 to p-8 */

/* Sections */
section-gap: 32px;              /* space-y-8 between blocks */
inner-gap: 24px;                /* space-y-6 inside blocks */
```

### Container & Grid

```jsx
// Page Container
<div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
  {/* Content */}
</div>

// Cards Grid
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// Data Tables - Sticky Headers
<div className="overflow-x-auto">
  <table className="w-full">
    <thead className="sticky top-0 z-10 bg-surface">
      {/* Headers */}
    </thead>
    <tbody>
      {/* Rows */}
    </tbody>
  </table>
</div>
```

### Responsive Behavior

- **Sidebar:** 280px desktop, collapses to icons ≤ 1024px, slide-over on mobile
- **Actions:** Stack horizontally on desktop, compress to icons on mobile
- **Tables:** Enable horizontal scroll ≤ md breakpoint, keep first column sticky

---

## Components

### Buttons

#### Primary Button

```jsx
<button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40">
  Primary Action
</button>
```

#### Secondary (Outline) Button

```jsx
<button className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-foreground hover:bg-muted">
  Secondary Action
</button>
```

#### Ghost Button

```jsx
<button className="inline-flex h-9 items-center gap-2 rounded-xl px-4 text-foreground/70 hover:bg-muted">
  Tertiary Action
</button>
```

#### Destructive Button

```jsx
<button className="inline-flex h-9 items-center gap-2 rounded-xl bg-danger px-4 text-white hover:bg-danger-600">
  Delete
</button>
```

### Cards

```jsx
<div className="rounded-2xl border border-border bg-surface shadow-sm">
  <div className="gradient-soft p-6 border-b border-border">
    <h3 className="h3">Card Title</h3>
    <p className="body-sm text-fg-muted mt-1">Optional description</p>
  </div>
  <div className="p-6">
    {/* Card content */}
  </div>
  <div className="p-6 border-t border-border flex justify-end gap-3">
    {/* Footer actions */}
  </div>
</div>
```

### Form Elements

```jsx
// Input
<div className="space-y-2">
  <label className="body-sm font-semibold text-foreground">
    Label
  </label>
  <input 
    className="h-9 w-full rounded-xl border border-border bg-surface px-3 focus:ring-2 focus:ring-primary/30 focus:border-primary" 
    type="text"
  />
  <p className="caption text-fg-muted">Help text</p>
</div>

// Select
<select className="h-9 w-full rounded-xl border border-border bg-surface px-3 focus:ring-2 focus:ring-primary/30">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Badges & Chips

```jsx
// Status Badge (Solid)
<span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-success">
  Certified
</span>

// Stage Pill (Soft)
<span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold text-primary-600 bg-primary-500/10">
  During
</span>

// Citation Chip
<span className="inline-flex items-center rounded-lg px-2 py-0.5 caption border border-border bg-muted">
  Citation
</span>
```

### Navigation

```jsx
// Navbar (64px height)
<nav className="h-16 border-b border-border bg-surface">
  <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
    <div>{/* Brand */}</div>
    <div>{/* Breadcrumb */}</div>
    <div className="flex items-center gap-4">
      {/* Role switcher, Ask workspace, User menu */}
    </div>
  </div>
</nav>

// Sidebar (280px width)
<aside className="w-70 border-r border-border bg-surface">
  {/* 6 primary items max */}
</aside>

// Tabs (Underline style)
<div className="border-b border-border">
  <nav className="flex gap-6">
    <button className="body-sm font-semibold text-foreground relative py-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full">
      Active Tab
    </button>
    <button className="body-sm text-fg-muted hover:text-foreground py-3">
      Inactive Tab
    </button>
  </nav>
</div>
```

### Tables

```jsx
<table className="w-full">
  <thead>
    <tr className="border-b border-border">
      <th className="body-sm font-semibold text-left p-4">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-border hover:bg-muted transition-smooth">
      <td className="p-4 body">Content</td>
    </tr>
  </tbody>
</table>
```

---

## Animations & Interactions

### Transitions

```css
/* Most UI elements */
.transition-smooth {
  transition: all 150ms ease-out;
}

/* Drawers, modals */
.transition-smooth-slow {
  transition: all 200ms ease-out;
}
```

### Hover States

```jsx
// Elevate cards
<div className="transition-smooth hover:shadow-md hover:-translate-y-[1px]">

// Button press
<button className="active:translate-y-[1px]">
```

### Focus States

```jsx
// Standard focus ring
<input className="focus:ring-2 focus:ring-primary/40 focus:outline-none" />

// Using utility class
<input className="focus-ring" />
```

### Drawer Animation

```jsx
// Slide in from right
<div className="fixed right-0 top-0 h-full w-96 bg-surface shadow-lg transition-smooth-slow">
  {/* Content */}
</div>

// Backdrop
<div className="fixed inset-0 bg-black/30 transition-smooth" />
```

---

## Usage Examples

### Home Page Hero

```jsx
<div className="gradient-soft">
  <div className="max-w-7xl mx-auto px-6 py-24">
    <h1 className="display-lg">Your fastest path to production</h1>
    <p className="body-lg text-fg-muted mt-6 max-w-2xl">
      Build, deploy, and scale your apps with unparalleled ease – from your first user to your billionth
    </p>
    <div className="flex gap-4 mt-8">
      <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-white transition-smooth hover:shadow-md">
        Get Started for Free
      </button>
      <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-foreground hover:bg-muted">
        Contact Sales
      </button>
    </div>
  </div>
</div>
```

### Feature Card Grid

```jsx
<div className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="h2 mb-12">Enterprise-grade infrastructure</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {features.map((feature) => (
      <div key={feature.id} className="rounded-2xl border border-border bg-surface shadow-sm p-6 hover:shadow-md transition-smooth">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <feature.icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="h3 mb-2">{feature.title}</h3>
        <p className="body-sm text-fg-muted">{feature.description}</p>
      </div>
    ))}
  </div>
</div>
```

### Data Table

```jsx
<div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="sticky top-0 z-10 bg-surface border-b border-border">
        <tr>
          <th className="body-sm font-semibold text-left p-4">Name</th>
          <th className="body-sm font-semibold text-left p-4">Status</th>
          <th className="body-sm font-semibold text-left p-4">Updated</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-b border-border hover:bg-muted transition-smooth">
            <td className="p-4 body">{item.name}</td>
            <td className="p-4">
              <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-success">
                {item.status}
              </span>
            </td>
            <td className="p-4 body-sm text-fg-muted">{item.updated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
```

---

## Best Practices

### Visual Hierarchy

1. **Page Titles:** Use `h1` (700 weight), add 16-20px spacing below
2. **Section Titles:** Use `h2` (700 weight), 24px spacing above, 12px below
3. **Card Titles:** Use `h3` (600 weight) with muted description
4. **Emphasis:** Use color, weight (600), and proximity—avoid ALL CAPS
5. **Rule of 3:** Group cards in 3s; avoid >5 tabs (overflow to "More")

### Color Usage

- Use **primary** (indigo) for main actions and focus states
- Use **accent** (violet) sparingly for special highlights
- Use **semantic colors** (success, warning, danger, info) for status and feedback
- Keep most text **foreground** with **fg-muted** for secondary info
- Use **gradient-brand** only for hero sections and special highlights

### Spacing

- Follow the **8-point grid** consistently
- Use **32px gaps** between major sections
- Use **24px gaps** within sections
- Card padding: **16-24px**
- Modal/drawer padding: **24-32px**

### Accessibility

- Maintain **4.5:1 contrast ratio** for normal text
- Maintain **3:1 contrast ratio** for large text
- Always include **focus indicators**
- Support **keyboard navigation**
- Respect **prefers-reduced-motion**

---

## Dark Mode Support

The design system includes dark mode variants:

```css
.dark {
  --bg: #0F172A;           /* Dark slate */
  --surface: #1E293B;      /* Dark panels */
  --border: #334155;       /* Dark borders */
  --fg: #F1F5F9;           /* Light text */
  --fg-muted: #94A3B8;     /* Muted light text */
}
```

To enable dark mode in your app, add the `dark` class to the root element:

```jsx
<html className="dark">
  {/* ... */}
</html>
```

---

## Resources

- **Design Reference:** [Render.com](https://render.com)
- **Typography:** [Inter Font](https://fonts.google.com/specimen/Inter), [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide React](https://lucide.dev)

---

**Need help?** Refer to the component examples above or check the implementation in `/app/globals.css`.
