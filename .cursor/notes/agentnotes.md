# Agent Notes - CTOS-25 Project

## Project Overview

This is a Next.js application built with the **Render Design System**, inspired by [Render.com](https://render.com)'s clean, modern design language.

### Tech Stack

- **Framework:** Next.js 15.5.4 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui with Supabase Platform Kit
- **Typography:** Inter (UI) & Roboto Mono (Code)
- **Database:** Supabase integration ready

### Design System

The project follows a comprehensive design system based on Render.com:

- **Colors:** Indigo/Violet primary palette (#5458EA, #7C3AED)
- **Typography:** 11-level type scale from .display-xl to .caption
- **Spacing:** 8-point grid system
- **Components:** Full component library with consistent styling

## Key Files & Structure

### Design System Files

- `app/globals.css` - Complete design system CSS with tokens, typography, utilities
- `.cursor/docs/render-design-system.md` - Comprehensive design system documentation
- `.cursor/docs/quick-reference.md` - Quick reference guide for developers
- `.cursor/docs/component-examples.tsx` - Ready-to-use component examples

### Application Files

- `app/layout.tsx` - Root layout with Inter & Roboto Mono fonts
- `app/page.tsx` - Demo homepage showcasing the design system
- `components/ui/*` - shadcn components (20+ components)
- `components/supabase-manager/*` - Supabase management components

## Design Principles

1. **Clarity over complexity** - Clean, readable interfaces
2. **Purposeful color** - Use color to guide and inform
3. **Consistent spacing** - 8-point grid system
4. **Smooth interactions** - Subtle animations (150-200ms)
5. **Accessibility first** - WCAG 2.1 AA compliant

## Color System Quick Reference

```css
/* Backgrounds */
--bg: #F8FAFC (slate-50)
--surface: #FFFFFF
--border: #E6E8EF
--muted: #F3F5F9

/* Text */
--fg: #0F172A (slate-900)
--fg-muted: #475569
--fg-subtle: #64748B

/* Brand */
--primary-600: #5458EA (indigo)
--accent-600: #7C3AED (violet)

/* Semantic */
--success-500: #10B981 (green)
--warning-500: #F59E0B (amber)
--danger-500: #EF4444 (red)
--info-500: #0EA5E9 (cyan)
```

## Typography Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.display-xl` | 60px | 700 | Hero titles |
| `.display-lg` | 48px | 700 | Large headlines |
| `h1` | 36px | 700 | Page titles |
| `h2` | 30px | 700 | Section titles |
| `h3` | 24px | 600 | Card titles |
| `h4` | 20px | 600 | Subsection titles |
| `.body-lg` | 18px | 500 | Large body |
| `p`, `.body` | 16px | 400 | Default body |
| `.body-sm` | 14px | 500 | Small text, labels |
| `.caption` | 12px | 500 | Meta info |
| `.mono-sm` | 13px | 500 | Code snippets |

## Component Patterns

### Button Sizes
- Small: `h-8 px-3 text-sm`
- Medium: `h-9 px-4 text-sm`
- Large: `h-10 px-5 text-[15px]`

### Cards
- Border radius: `rounded-2xl`
- Border: `border border-border`
- Shadow: `shadow-sm` (hover: `shadow-md`)
- Padding: `p-6` (16-24px typical)

### Forms
- Input height: `h-9`
- Border radius: `rounded-xl`
- Focus ring: `focus:ring-2 focus:ring-primary/40`

## Development Guidelines

### When Building New Features

1. **Use existing components** from `components/ui/` when possible
2. **Follow the type scale** - Don't create custom font sizes
3. **Use design tokens** - Always use CSS variables, not hardcoded colors
4. **8-point spacing** - Use Tailwind spacing: `p-2, p-3, p-4, p-6, p-8`
5. **Consistent transitions** - Use `.transition-smooth` (150ms) or `.transition-smooth-slow` (200ms)

### Color Usage Rules

- **Primary (Indigo):** Main actions, links, focus states
- **Accent (Violet):** Special highlights, premium features
- **Semantic colors:** Status badges, alerts, notifications
- **Gradients:** Sparingly - hero sections, special highlights only

### Accessibility Checklist

- [ ] 4.5:1 contrast ratio for normal text
- [ ] 3:1 contrast ratio for large text  
- [ ] Focus indicators on all interactive elements
- [ ] Keyboard navigation support
- [ ] Respect `prefers-reduced-motion`
- [ ] Proper ARIA labels

## Common Pitfalls to Avoid

❌ **Don't:**
- Use random font sizes - stick to the type scale
- Hardcode colors - always use CSS variables
- Create inconsistent spacing - use 8-point grid
- Use heavy animations - keep transitions subtle (150-200ms)
- Mix design systems - stay consistent with Render style

✅ **Do:**
- Reference `.cursor/docs/quick-reference.md` often
- Use component examples from `.cursor/docs/component-examples.tsx`
- Test dark mode if implementing it
- Maintain consistent border radius (xl for inputs/buttons, 2xl for cards)
- Use hover states on interactive elements

## Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Next Steps / TODO

- [ ] Implement dark mode toggle (classes already in place)
- [ ] Add more page examples (dashboard, settings, etc.)
- [ ] Create form validation examples
- [ ] Add loading states and skeletons
- [ ] Implement responsive navigation (mobile menu)
- [ ] Add more interactive components (modals, drawers, etc.)
- [ ] Create a style guide page showcasing all components

## Resources

- **Design Reference:** [Render.com](https://render.com)
- **Typography:** [Inter](https://fonts.google.com/specimen/Inter), [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide React](https://lucide.dev)

## Notes for Future Agents

- The design system is fully implemented in `globals.css`
- All Tailwind classes use the custom design tokens
- Font loading is handled via Next.js font optimization
- The Supabase Platform Kit is installed but not yet configured
- Demo page at `/` showcases the design system in action
- Refer to `.cursor/docs/` for detailed documentation
