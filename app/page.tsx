export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Navbar */}
      <nav className="h-16 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="font-bold text-xl text-foreground">CTOS-25</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="body-sm font-medium text-foreground hover:text-primary transition-smooth">Product</a>
              <a href="#" className="body-sm font-medium text-fg-muted hover:text-foreground transition-smooth">Pricing</a>
              <a href="#" className="body-sm font-medium text-fg-muted hover:text-foreground transition-smooth">Docs</a>
              <a href="#" className="body-sm font-medium text-fg-muted hover:text-foreground transition-smooth">Blog</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex h-9 items-center gap-2 rounded-xl px-4 text-sm text-foreground hover:bg-muted transition-smooth">
              Sign In
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-primary px-4 text-sm text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="gradient-soft">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
          <h1 className="display-lg max-w-3xl">
            Your fastest path to production
          </h1>
          <p className="body-lg text-fg-muted mt-6 max-w-2xl">
            Build, deploy, and scale your apps with unparalleled ease – from your first user to your billionth
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-[15px] text-white transition-smooth hover:shadow-md focus:ring-2 focus:ring-primary/40 active:translate-y-[1px]">
              Get Started for Free
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-[15px] text-foreground hover:bg-muted transition-smooth">
              Contact Sales
            </button>
          </div>
          
          {/* Status Badges */}
          <div className="flex flex-wrap gap-3 mt-12">
            <span className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white bg-success shadow-xs">
              ✓ SOC 2 Type 2
            </span>
            <span className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white bg-success shadow-xs">
              ✓ HIPAA Compliant
            </span>
            <span className="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white bg-success shadow-xs">
              ✓ ISO 27001
            </span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="h2">Enterprise-grade infrastructure, from day one</h2>
          <p className="body text-fg-muted mt-4 max-w-2xl mx-auto">
            Security, compliance, and control. No custom setup required, so you can focus on product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Audit controls",
              description: "Built-in audit logging and monitoring for platform events.",
              color: "primary"
            },
            {
              title: "Encryption at rest",
              description: "Minimum AES-128 encryption for databases, backups, and secrets.",
              color: "accent"
            },
            {
              title: "Unique user identification",
              description: "Control services and resources with role-based access control.",
              color: "success"
            },
            {
              title: "Private networking",
              description: "Keep internal traffic off the public internet—without VPC complexity.",
              color: "info"
            },
            {
              title: "Point-in-time recovery",
              description: "Restore Postgres to any point using checksummed backups stored across multiple zones.",
              color: "warning"
            },
            {
              title: "Compliance standards",
              description: "Meet SOC 2 Type 2, HIPAA, ISO 27001, and GDPR requirements without overhead.",
              color: "success"
            },
          ].map((feature, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-surface shadow-sm p-6 hover:shadow-md transition-smooth hover:-translate-y-[1px] cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                <div className={`w-5 h-5 bg-${feature.color} rounded`} />
              </div>
              <h3 className="h3 mb-2">{feature.title}</h3>
              <p className="body-sm text-fg-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Table Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <h2 className="h2 mb-8">Your Services</h2>
        
        <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-surface border-b border-border">
                <tr>
                  <th className="body-sm font-semibold text-left p-4">Name</th>
                  <th className="body-sm font-semibold text-left p-4">Type</th>
                  <th className="body-sm font-semibold text-left p-4">Status</th>
                  <th className="body-sm font-semibold text-left p-4">Region</th>
                  <th className="body-sm font-semibold text-left p-4">Last Deploy</th>
                  <th className="body-sm font-semibold text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "web-app-production", type: "Web Service", status: "Active", region: "US East (N. Virginia)", updated: "2 hours ago" },
                  { name: "api-service", type: "Private Service", status: "Active", region: "EU West (Frankfurt)", updated: "1 day ago" },
                  { name: "background-worker", type: "Background Worker", status: "Stopped", region: "US West (Oregon)", updated: "3 days ago" },
                  { name: "cron-job-daily", type: "Cron Job", status: "Active", region: "Asia Pacific (Singapore)", updated: "4 hours ago" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted transition-smooth">
                    <td className="p-4 body font-medium text-foreground">{item.name}</td>
                    <td className="p-4 body-sm text-fg-muted">{item.type}</td>
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
                      <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-smooth">
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

      {/* CTA Section */}
      <div className="gradient-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 text-center">
          <h2 className="h1 text-white mb-6">
            Start building with CTOS-25
          </h2>
          <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            The modern cloud for developers and teams. Deploy your app in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-5 text-[15px] text-primary font-semibold hover:shadow-lg transition-smooth">
              Deploy Your App for Free
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-5 text-[15px] text-white font-medium hover:bg-white/20 transition-smooth">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="h4 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Features</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Pricing</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="h4 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Documentation</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Blog</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="h4 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">About</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Careers</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="h4 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Privacy</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Terms</a></li>
                <li><a href="#" className="body-sm text-fg-muted hover:text-foreground transition-smooth">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-sm text-fg-muted">© 2025 CTOS-25. All rights reserved.</p>
            <p className="caption text-fg-subtle">Built with Render Design System</p>
          </div>
        </div>
      </footer>
    </div>
  );
}