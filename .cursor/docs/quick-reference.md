# Render Design System - Quick Reference

## 🎨 Colors

### Backgrounds
```jsx
className="bg-bg"           // #F8FAFC - Main background
className="bg-surface"      // #FFFFFF - Cards, panels
className="bg-muted"        // #F3F5F9 - Subtle backgrounds
```

### Text
```jsx
className="text-foreground"   // #0F172A - Primary text
className="text-fg-muted"     // #475569 - Secondary text
className="text-fg-subtle"    // #64748B - Tertiary text
```

### Brand
```jsx
className="bg-primary text-white"    // #5458EA - Primary actions
className="bg-accent text-white"     // #7C3AED - Accent highlights
```

### Semantic
```jsx
className="bg-success text-white"    // #10B981 - Success states
className="bg-warning text-white"    // #F59E0B - Warning states
className="bg-danger text-white"     // #EF4444 - Error states
className="bg-info text-white"       // #0EA5E9 - Info states
```

---

## 📝 Typography

### Headings
```jsx
<h1 className="display-xl">Hero Title</h1>     // 60px, 700
<h1 className="display-lg">Large Title</h1>    // 48px, 700
<h1>Page Title</h1>                            // 36px, 700
<h2>Section Title</h2>                         // 30px, 700
<h3>Card Title</h3>                            // 24px, 600
<h4>Subsection</h4>                            // 20px, 600
```

### Body Text
```jsx
<p className="body-lg">Large body text</p>     // 18px, 500
<p>Default body text</p>                       // 16px, 400
<p className="body-sm">Small text</p>          // 14px, 500
<p className="caption">Meta info</p>           // 12px, 500
<code className="mono-sm">Code snippet</code>  // 13px, 500
```

---

## 📦 Components

### Primary Button
```jsx
<button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40">
  Click Me
</button>
```

### Secondary Button
```jsx
<button className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm text-foreground hover:bg-muted">
  Cancel
</button>
```

### Card
```jsx
<div className="rounded-2xl border border-border bg-surface shadow-sm p-6">
  <h3 className="h3 mb-2">Card Title</h3>
  <p className="body-sm text-fg-muted">Card description</p>
</div>
```

### Card with Gradient Header
```jsx
<div className="rounded-2xl border border-border bg-surface shadow-sm">
  <div className="gradient-soft p-6 border-b border-border">
    <h3 className="h3">Title</h3>
    <p className="body-sm text-fg-muted mt-1">Description</p>
  </div>
  <div className="p-6">
    Content
  </div>
</div>
```

### Input Field
```jsx
<div className="space-y-2">
  <label className="body-sm font-semibold text-foreground">
    Label
  </label>
  <input 
    className="h-9 w-full rounded-xl border border-border bg-surface px-3 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" 
    type="text"
  />
  <p className="caption text-fg-muted">Help text</p>
</div>
```

### Badge (Solid)
```jsx
<span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-success">
  Active
</span>
```

### Badge (Soft)
```jsx
<span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold text-primary-600 bg-primary-500/10">
  New
</span>
```

---

## 📐 Spacing

### 8-Point System
```jsx
className="space-y-2"   // 8px
className="space-y-3"   // 12px
className="space-y-4"   // 16px
className="space-y-5"   // 20px
className="space-y-6"   // 24px
className="space-y-8"   // 32px
className="space-y-12"  // 48px
```

### Component Padding
```jsx
// Small button
className="h-8 px-3"

// Medium button (default)
className="h-9 px-4"

// Large button
className="h-10 px-5"

// Card
className="p-4"  // 16px
className="p-6"  // 24px

// Modal/Drawer
className="p-6"  // 24px
className="p-8"  // 32px
```

---

## 🎭 Shadows

```jsx
className="shadow-xs"  // Subtle: 0 1px 2px
className="shadow-sm"  // Small: 0 2px 8px
className="shadow-md"  // Medium: 0 6px 20px
className="shadow-lg"  // Large: 0 12px 32px
```

---

## 🔄 Transitions

```jsx
className="transition-smooth"       // 150ms ease-out
className="transition-smooth-slow"  // 200ms ease-out

// Hover effects
className="hover:shadow-md hover:-translate-y-[1px]"

// Active effects
className="active:translate-y-[1px]"

// Focus ring
className="focus:ring-2 focus:ring-primary/40 focus:outline-none"
```

---

## 🎨 Gradients

```jsx
// Brand gradient (hero sections, highlights)
<div className="gradient-brand">
  Content
</div>

// Soft gradient (card headers, empty states)
<div className="gradient-soft">
  Content
</div>
```

---

## 📱 Layout

### Page Container
```jsx
<div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
  {/* Content */}
</div>
```

### Cards Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

### Navbar
```jsx
<nav className="h-16 border-b border-border bg-surface">
  <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
    <div>{/* Left */}</div>
    <div>{/* Right */}</div>
  </div>
</nav>
```

### Tabs
```jsx
<div className="border-b border-border">
  <nav className="flex gap-6">
    <button className="body-sm font-semibold text-foreground relative py-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full">
      Active
    </button>
    <button className="body-sm text-fg-muted hover:text-foreground py-3">
      Inactive
    </button>
  </nav>
</div>
```

---

## 📊 Data Table

```jsx
<div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="sticky top-0 z-10 bg-surface border-b border-border">
        <tr>
          <th className="body-sm font-semibold text-left p-4">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-border hover:bg-muted transition-smooth">
          <td className="p-4 body">Content</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

---

## 🌙 Dark Mode

Enable dark mode by adding the `dark` class to the root element:

```jsx
<html className="dark">
  {/* ... */}
</html>
```

---

## ✅ Common Patterns

### Hero Section
```jsx
<div className="gradient-soft">
  <div className="max-w-7xl mx-auto px-6 py-24">
    <h1 className="display-lg">Your fastest path to production</h1>
    <p className="body-lg text-fg-muted mt-6 max-w-2xl">
      Subtitle text goes here
    </p>
    <div className="flex gap-4 mt-8">
      <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-[15px] text-white hover:shadow-md">
        Get Started
      </button>
      <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-[15px] text-foreground hover:bg-muted">
        Learn More
      </button>
    </div>
  </div>
</div>
```

### Feature Card Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="rounded-2xl border border-border bg-surface shadow-sm p-6 hover:shadow-md transition-smooth hover:-translate-y-[1px]">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      {/* Icon */}
    </div>
    <h3 className="h3 mb-2">Feature Title</h3>
    <p className="body-sm text-fg-muted">
      Feature description goes here
    </p>
  </div>
</div>
```

---

## 🎯 Button Sizes Quick Reference

```jsx
// Small
className="h-8 px-3 text-sm"

// Medium (default)
className="h-9 px-4 text-sm"

// Large
className="h-10 px-5 text-[15px]"
```

---

## 🔧 Border Radius

```jsx
className="rounded-lg"    // 0.5rem (8px)
className="rounded-xl"    // 1rem (16px)
className="rounded-2xl"   // 1.25rem (20px)
```

---

## 📋 Form States

### Default
```jsx
className="border-border focus:ring-primary/30 focus:border-primary"
```

### Error
```jsx
className="border-danger focus:ring-danger/30 focus:border-danger"
aria-invalid="true"
```

### Disabled
```jsx
className="disabled:opacity-50 disabled:cursor-not-allowed"
disabled
```

---

**💡 Pro Tip:** Keep this file handy while building. All classes use Tailwind CSS with our custom Render design tokens!
