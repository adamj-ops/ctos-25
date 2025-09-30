import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()
  
  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()
  
  // If authenticated, redirect to app
  if (user) {
    redirect('/app')
  }
  
  // Otherwise show landing page
  return (
    <div className="min-h-screen bg-bg">
      {/* Navbar */}
      <nav className="h-16 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-bold text-xl text-foreground">CTOS-25</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#product" className="body-sm font-medium text-foreground hover:text-primary transition-smooth">Product</a>
              <a href="#features" className="body-sm font-medium text-fg-muted hover:text-foreground transition-smooth">Features</a>
              <a href="#about" className="body-sm font-medium text-fg-muted hover:text-foreground transition-smooth">About</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="inline-flex h-9 items-center gap-2 rounded-xl px-4 text-sm text-foreground hover:bg-muted transition-smooth">
              Sign In
            </Link>
            <Link href="/auth/sign-up" className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="gradient-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-lg mb-6">
              Clinical Trial Document Management
            </h1>
            <p className="body-lg text-fg-muted mb-8 max-w-2xl mx-auto">
              Streamline your clinical trial documentation with AI-powered search, 
              role-based access, and real-time collaboration.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/auth/sign-up" className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-base font-medium text-white transition-smooth hover:shadow-lg focus:ring-2 focus:ring-primary/40">
                Get Started Free
              </Link>
              <Link href="/auth/login" className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-6 text-base font-medium text-foreground hover:bg-muted transition-smooth">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24" id="features">
        <div className="text-center mb-16">
          <h2 className="display-md mb-4">Everything you need to manage clinical trials</h2>
          <p className="body-lg text-fg-muted max-w-2xl mx-auto">
            Built for sponsors, monitors, and site coordinators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="h3 mb-2">Document Management</h3>
            <p className="body-sm text-fg-muted">
              Track TMF, ISF, and IF documents with version control and certification.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="h3 mb-2">Community Q&A</h3>
            <p className="body-sm text-fg-muted">
              Ask questions and get answers from experts with AI assistance.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="h3 mb-2">Analytics & Reports</h3>
            <p className="body-sm text-fg-muted">
              Track compliance, enrollment, and site performance in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="text-center text-fg-muted text-sm">
            <p>&copy; 2025 CTOS-25. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}