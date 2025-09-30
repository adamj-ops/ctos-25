/**
 * Render Design System - Component Examples
 * 
 * This file contains ready-to-use component examples following
 * the Render.com design language.
 */

import React from 'react';

/* ============================================
   BUTTONS
   ============================================ */

export const ButtonExamples = () => {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h3 className="h3 mb-4">Buttons</h3>
        
        {/* Primary Button */}
        <div className="space-y-2 mb-6">
          <p className="body-sm font-semibold">Primary</p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex h-8 items-center gap-2 rounded-xl bg-primary px-3 text-sm text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40 active:translate-y-[1px]">
              Small
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40 active:translate-y-[1px]">
              Medium
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-[15px] text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40 active:translate-y-[1px]">
              Large
            </button>
          </div>
        </div>

        {/* Secondary/Outline Button */}
        <div className="space-y-2 mb-6">
          <p className="body-sm font-semibold">Secondary (Outline)</p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex h-8 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-sm text-foreground transition-smooth hover:bg-muted">
              Small
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm text-foreground transition-smooth hover:bg-muted">
              Medium
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-[15px] text-foreground transition-smooth hover:bg-muted">
              Large
            </button>
          </div>
        </div>

        {/* Ghost Button */}
        <div className="space-y-2 mb-6">
          <p className="body-sm font-semibold">Ghost</p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex h-8 items-center gap-2 rounded-xl px-3 text-sm text-foreground/70 transition-smooth hover:bg-muted hover:text-foreground">
              Small
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl px-4 text-sm text-foreground/70 transition-smooth hover:bg-muted hover:text-foreground">
              Medium
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl px-5 text-[15px] text-foreground/70 transition-smooth hover:bg-muted hover:text-foreground">
              Large
            </button>
          </div>
        </div>

        {/* Destructive Button */}
        <div className="space-y-2">
          <p className="body-sm font-semibold">Destructive</p>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex h-8 items-center gap-2 rounded-xl bg-danger px-3 text-sm text-white transition-smooth hover:bg-danger-600 focus:ring-2 focus:ring-danger/40">
              Delete
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-danger px-4 text-sm text-white transition-smooth hover:bg-danger-600 focus:ring-2 focus:ring-danger/40">
              Delete
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-danger px-5 text-[15px] text-white transition-smooth hover:bg-danger-600 focus:ring-2 focus:ring-danger/40">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   CARDS
   ============================================ */

export const CardExamples = () => {
  return (
    <div className="space-y-6 p-8">
      <h3 className="h3 mb-4">Cards</h3>

      {/* Basic Card */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm">
        <div className="p-6">
          <h3 className="h3 mb-2">Basic Card</h3>
          <p className="body-sm text-fg-muted">
            This is a simple card with just content and no header or footer.
          </p>
        </div>
      </div>

      {/* Card with Soft Gradient Header */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm">
        <div className="gradient-soft p-6 border-b border-border">
          <h3 className="h3">Card with Gradient Header</h3>
          <p className="body-sm text-fg-muted mt-1">
            Optional description text goes here
          </p>
        </div>
        <div className="p-6">
          <p className="body">
            Main content area with plenty of space for your data.
          </p>
        </div>
      </div>

      {/* Card with Footer Actions */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm">
        <div className="p-6">
          <h3 className="h3 mb-2">Card with Footer</h3>
          <p className="body-sm text-fg-muted">
            This card includes footer actions for common operations.
          </p>
        </div>
        <div className="p-6 border-t border-border flex justify-end gap-3">
          <button className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm text-foreground hover:bg-muted">
            Cancel
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white hover:shadow-md">
            Save
          </button>
        </div>
      </div>

      {/* Hoverable Card (for grids) */}
      <div className="rounded-2xl border border-border bg-surface shadow-sm transition-smooth hover:shadow-md hover:-translate-y-[1px] cursor-pointer">
        <div className="p-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <div className="w-5 h-5 bg-primary rounded" />
          </div>
          <h3 className="h3 mb-2">Hoverable Feature Card</h3>
          <p className="body-sm text-fg-muted">
            Perfect for feature grids. Elevates on hover to indicate interactivity.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   BADGES & CHIPS
   ============================================ */

export const BadgeExamples = () => {
  return (
    <div className="space-y-6 p-8">
      <h3 className="h3 mb-4">Badges & Chips</h3>

      {/* Status Badges (Solid) */}
      <div className="space-y-2">
        <p className="body-sm font-semibold">Status Badges (Solid)</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-primary">
            Current
          </span>
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-success">
            Certified
          </span>
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-warning">
            Superseded
          </span>
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-danger">
            Missing
          </span>
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white bg-info">
            Info
          </span>
        </div>
      </div>

      {/* Stage Pills (Soft) */}
      <div className="space-y-2">
        <p className="body-sm font-semibold">Stage Pills (Soft)</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold text-fg-subtle bg-muted">
            Before
          </span>
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold text-primary-600 bg-primary-500/10">
            During
          </span>
          <span className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold text-accent-600 bg-accent-500/10">
            After
          </span>
        </div>
      </div>

      {/* Citation Chips */}
      <div className="space-y-2">
        <p className="body-sm font-semibold">Citation Chips</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-lg px-2 py-0.5 caption border border-border bg-muted">
            Documentation
          </span>
          <span className="inline-flex items-center rounded-lg px-2 py-0.5 caption border border-border bg-muted">
            API Reference
          </span>
          <span className="inline-flex items-center rounded-lg px-2 py-0.5 caption border border-border bg-muted">
            Example Code
          </span>
        </div>
      </div>

      {/* Count Badges */}
      <div className="space-y-2">
        <p className="body-sm font-semibold">Count Badges</p>
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="body">Notifications</span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-danger text-white text-xs font-semibold">
              3
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="body">Messages</span>
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs font-semibold">
              12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   FORMS
   ============================================ */

export const FormExamples = () => {
  return (
    <div className="space-y-6 p-8 max-w-md">
      <h3 className="h3 mb-4">Form Elements</h3>

      {/* Text Input */}
      <div className="space-y-2">
        <label className="body-sm font-semibold text-foreground">
          Email Address
        </label>
        <input 
          className="h-9 w-full rounded-xl border border-border bg-surface px-3 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-smooth" 
          type="email"
          placeholder="you@example.com"
        />
        <p className="caption text-fg-muted">We'll never share your email.</p>
      </div>

      {/* Text Input with Error */}
      <div className="space-y-2">
        <label className="body-sm font-semibold text-foreground">
          Password
        </label>
        <input 
          className="h-9 w-full rounded-xl border border-danger bg-surface px-3 focus:ring-2 focus:ring-danger/30 focus:border-danger outline-none transition-smooth" 
          type="password"
          aria-invalid="true"
        />
        <p className="caption text-danger">Password must be at least 8 characters.</p>
      </div>

      {/* Select */}
      <div className="space-y-2">
        <label className="body-sm font-semibold text-foreground">
          Region
        </label>
        <select className="h-9 w-full rounded-xl border border-border bg-surface px-3 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-smooth">
          <option>US East (N. Virginia)</option>
          <option>US West (Oregon)</option>
          <option>EU (Frankfurt)</option>
          <option>Asia Pacific (Singapore)</option>
        </select>
      </div>

      {/* Textarea */}
      <div className="space-y-2">
        <label className="body-sm font-semibold text-foreground">
          Description
        </label>
        <textarea 
          className="w-full rounded-xl border border-border bg-surface p-3 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-smooth resize-none" 
          rows={4}
          placeholder="Enter a description..."
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          id="terms"
          className="mt-1 accent-primary focus:ring-2 focus:ring-primary/40"
        />
        <div>
          <label htmlFor="terms" className="body-sm font-medium text-foreground cursor-pointer">
            I agree to the Terms and Conditions
          </label>
          <p className="caption text-fg-muted mt-0.5">
            You must agree before continuing.
          </p>
        </div>
      </div>

      {/* Radio Group */}
      <div className="space-y-3">
        <p className="body-sm font-semibold text-foreground">Plan</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="plan" 
              id="free"
              className="accent-primary focus:ring-2 focus:ring-primary/40"
            />
            <label htmlFor="free" className="body cursor-pointer">
              Free
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="plan" 
              id="pro"
              className="accent-primary focus:ring-2 focus:ring-primary/40"
              defaultChecked
            />
            <label htmlFor="pro" className="body cursor-pointer">
              Pro
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input 
              type="radio" 
              name="plan" 
              id="enterprise"
              className="accent-primary focus:ring-2 focus:ring-primary/40"
            />
            <label htmlFor="enterprise" className="body cursor-pointer">
              Enterprise
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   TABLES
   ============================================ */

export const TableExample = () => {
  const data = [
    { id: 1, name: 'web-app-production', status: 'Active', region: 'US East', updated: '2 hours ago' },
    { id: 2, name: 'api-service', status: 'Active', region: 'EU West', updated: '1 day ago' },
    { id: 3, name: 'background-worker', status: 'Stopped', region: 'US West', updated: '3 days ago' },
  ];

  return (
    <div className="p-8">
      <h3 className="h3 mb-4">Data Table</h3>
      
      <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="sticky top-0 z-10 bg-surface border-b border-border">
              <tr>
                <th className="body-sm font-semibold text-left p-4">Name</th>
                <th className="body-sm font-semibold text-left p-4">Status</th>
                <th className="body-sm font-semibold text-left p-4">Region</th>
                <th className="body-sm font-semibold text-left p-4">Last Updated</th>
                <th className="body-sm font-semibold text-right p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-border hover:bg-muted transition-smooth">
                  <td className="p-4 body font-medium">{item.name}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium text-white ${
                      item.status === 'Active' ? 'bg-success' : 'bg-fg-subtle'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 body-sm text-fg-muted">{item.region}</td>
                  <td className="p-4 body-sm text-fg-muted">{item.updated}</td>
                  <td className="p-4 text-right">
                    <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-foreground/70 hover:bg-muted hover:text-foreground">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   NAVIGATION
   ============================================ */

export const NavigationExamples = () => {
  return (
    <div className="space-y-8">
      {/* Navbar */}
      <nav className="h-16 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-bold text-xl">Brand</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="body-sm font-medium text-foreground hover:text-primary">Product</a>
              <a href="#" className="body-sm font-medium text-fg-muted hover:text-foreground">Pricing</a>
              <a href="#" className="body-sm font-medium text-fg-muted hover:text-foreground">Docs</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex h-9 items-center gap-2 rounded-xl px-4 text-sm text-foreground hover:bg-muted">
              Sign In
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white hover:shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="p-8">
        <div className="border-b border-border">
          <nav className="flex gap-6">
            <button className="body-sm font-semibold text-foreground relative py-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full transition-smooth">
              Overview
            </button>
            <button className="body-sm text-fg-muted hover:text-foreground py-3 transition-smooth">
              Analytics
            </button>
            <button className="body-sm text-fg-muted hover:text-foreground py-3 transition-smooth">
              Settings
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

/* ============================================
   COMPLETE PAGE EXAMPLE
   ============================================ */

export const CompletePageExample = () => {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <div className="gradient-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
          <h1 className="display-lg max-w-3xl">
            Your fastest path to production
          </h1>
          <p className="body-lg text-fg-muted mt-6 max-w-2xl">
            Build, deploy, and scale your apps with unparalleled ease – from your first user to your billionth
          </p>
          <div className="flex gap-4 mt-8">
            <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-[15px] text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40">
              Get Started for Free
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-[15px] text-foreground hover:bg-muted">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="h2 mb-12">Enterprise-grade infrastructure, from day one</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="rounded-2xl border border-border bg-surface shadow-sm p-6 hover:shadow-md transition-smooth hover:-translate-y-[1px]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div className="w-5 h-5 bg-primary rounded" />
              </div>
              <h3 className="h3 mb-2">Feature {i}</h3>
              <p className="body-sm text-fg-muted">
                Built-in audit logging and monitoring for platform events.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default {
  ButtonExamples,
  CardExamples,
  BadgeExamples,
  FormExamples,
  TableExample,
  NavigationExamples,
  CompletePageExample,
};
