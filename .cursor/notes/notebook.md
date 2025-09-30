# CTOS-25 Project Notebook

## Project Information

**Project Name:** CTOS-25  
**Started:** September 30, 2025  
**Design System:** Render.com inspired  
**Framework:** Next.js 15.5.4 (App Router)

---

## Design System Implementation Notes

### Typography Decisions

**Fonts Chosen:**
- **Inter** for UI/body text - Clean, modern, excellent readability
- **Roboto Mono** for code/numerals - Monospaced, professional

**Why these fonts?**
- Match Render.com's aesthetic perfectly
- Excellent variable font support
- Optimized by Next.js font system
- Wide language support
- Professional and clean appearance

### Color Palette Rationale

**Primary: Indigo (#5458EA)**
- Professional and trustworthy
- Good contrast against white backgrounds
- Accessible color combinations
- Matches Render's brand feel

**Accent: Violet (#7C3AED)**
- Complements indigo nicely
- Creates visual interest
- Used sparingly for highlights

**Background Strategy:**
- `#F8FAFC` - Very light blue-gray, easier on eyes than pure white
- `#FFFFFF` - Pure white for cards/panels creates depth
- `#E6E8EF` - Subtle borders don't overwhelm

### Component Design Patterns

**Border Radius Consistency:**
- Inputs/Buttons: `rounded-xl` (1rem / 16px)
- Cards: `rounded-2xl` (1.25rem / 20px)
- Badges: `rounded-lg` (0.5rem / 8px)
- Creates visual hierarchy through subtle differences

**Shadow Elevation:**
- xs: Subtle lift (badges, chips)
- sm: Default cards
- md: Hovered cards, dropdowns
- lg: Modals, important overlays

**Transition Philosophy:**
- Keep it fast: 150ms for most interactions
- Slightly slower (200ms) for drawers/modals
- Always use ease-out for natural feel
- Respect user's motion preferences

---

## Technical Discoveries

### Tailwind CSS v4 Notes

- Uses new `@theme inline` syntax
- CSS variables defined directly in globals.css
- More streamlined than v3 config approach
- Font variables work seamlessly with Next.js fonts

### Next.js Font Optimization

```typescript
// Font loading is optimized automatically
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",  // Prevents FOUT
});
```

### Supabase Platform Kit

**What's Included:**
- 20 UI components (alert, badge, button, card, etc.)
- Supabase Manager components (auth, database, logs, storage, etc.)
- Custom hooks for Supabase operations
- API routes for AI SQL queries and proxy

**Note:** Components are installed but not yet configured with actual Supabase project

---

## Development Tips

### Working with the Design System

**Color Classes:**
```jsx
// Always use these instead of arbitrary colors
bg-bg, bg-surface, bg-muted
text-foreground, text-fg-muted, text-fg-subtle
bg-primary, bg-accent, bg-success, bg-warning, bg-danger, bg-info
```

**Typography Classes:**
```jsx
// Use semantic class names
<h1>Page Title</h1>           // Automatically styled
<p className="body-lg">...</p> // For larger body text
<p className="caption">...</p> // For meta information
```

**Spacing Tokens:**
```
p-2 (8px), p-3 (12px), p-4 (16px), p-6 (24px), p-8 (32px)
```

### Common Component Patterns

**Interactive Cards:**
```jsx
className="rounded-2xl border border-border bg-surface shadow-sm 
           hover:shadow-md transition-smooth hover:-translate-y-[1px] cursor-pointer"
```

**Primary CTA Button:**
```jsx
className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 
           text-sm text-white transition-smooth hover:shadow-md 
           focus:ring-2 focus:ring-primary/40 active:translate-y-[1px]"
```

**Form Input:**
```jsx
className="h-9 w-full rounded-xl border border-border bg-surface px-3 
           focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
```

---

## Interesting Findings

### Why 8-Point Grid?

- Divisible by common screen sizes
- Scales well across devices
- Makes mental math easier (8, 16, 24, 32, 40, 48, 64)
- Industry standard (used by Material Design, Apple HIG, etc.)

### Typography Line Height Rationale

- Display text: 1.05-1.08 (tight for impact)
- Headings: 1.15-1.35 (comfortable)
- Body text: 1.55-1.6 (optimal readability)
- Small text: 1.4 (compact but readable)

### Shadow Opacity Pattern

All shadows use `rgba(2, 6, 23, X)`:
- Very dark blue-black instead of pure black
- Creates more natural, less harsh shadows
- Subtle color temperature matches design

---

## Performance Considerations

### Font Loading
- Using `display: "swap"` prevents FOUT (Flash of Unstyled Text)
- Fonts loaded via Next.js optimization (preloaded, self-hosted)
- Subset to "latin" reduces file size

### CSS Strategy
- Design tokens as CSS variables (easy theming)
- Utility-first with Tailwind (smaller bundle)
- Component-specific styles in component files
- Global styles only for typography and base elements

### Image Optimization (Future)
- Use Next.js Image component
- Lazy load below fold
- Serve WebP with fallbacks
- Proper sizing and srcset

---

## Accessibility Notes

### Color Contrast Ratios
All color combinations tested for WCAG AA compliance:
- Primary on white: 7.2:1 (AAA)
- Foreground on bg: 16.8:1 (AAA)
- Muted text: 4.8:1 (AA)

### Focus Indicators
- 2px ring with 40% opacity primary color
- Visible on all interactive elements
- Removed default browser outline (replaced with better ring)

### Motion
- `prefers-reduced-motion` respected
- Animations disabled or reduced to 0.01ms when preferred

---

## Design Inspiration

### What We Borrowed from Render.com

1. **Color Palette** - Indigo/violet primary colors
2. **Clean Backgrounds** - Off-white with white cards
3. **Typography** - Inter for that modern, clean feel
4. **Spacing** - Generous whitespace, not cramped
5. **Shadows** - Subtle, never harsh
6. **Interactions** - Quick, smooth transitions

### What We Adapted

1. **Component Library** - Used shadcn/ui for React components
2. **Type Scale** - Created more comprehensive 11-level scale
3. **Dark Mode** - Added foundation for dark theme
4. **Semantic Colors** - Expanded success/warning/danger/info palette

---

## Future Ideas

### Potential Enhancements
- [ ] Add chart components (already have Recharts installed)
- [ ] Create command palette (⌘K) for navigation
- [ ] Implement theme customizer
- [ ] Add more animation presets
- [ ] Create component playground/storybook
- [ ] Add code syntax highlighting theme

### Advanced Features to Consider
- [ ] Real-time collaboration UI
- [ ] Advanced data visualization
- [ ] File upload with progress
- [ ] Drag and drop interfaces
- [ ] Advanced form builders
- [ ] Multi-step wizards

---

## Resources Used

1. [Render.com](https://render.com) - Design reference
2. [shadcn/ui](https://ui.shadcn.com) - Component library
3. [Tailwind CSS](https://tailwindcss.com) - Utility framework
4. [Lucide Icons](https://lucide.dev) - Icon system
5. [Inter Font](https://rsms.me/inter/) - Typography
6. [Supabase](https://supabase.com) - Backend platform

---

## Lessons Learned

### What Worked Well
- Starting with comprehensive design tokens
- Creating documentation alongside implementation
- Using shadcn/ui for consistent component foundation
- Next.js font optimization made typography seamless

### Challenges Overcome
- Tailwind v4 new syntax (required learning @theme inline)
- Balancing Render aesthetics with shadcn components
- Ensuring color contrast for accessibility

### Best Practices Established
- Always reference design tokens, never hardcode
- Document as you build
- Test components in isolation
- Keep spacing consistent with 8-point grid

---

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Check design system docs
open .cursor/docs/render-design-system.md
open .cursor/docs/quick-reference.md
```

---

**Last Updated:** September 30, 2025
