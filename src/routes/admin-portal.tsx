import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, ShieldCheck, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/admin-portal")({
  head: () => ({
    meta: [
      { title: "Admin Portal - CareConnect" },
      { name: "description", content: "Admin portal for managing hospital beds and blood inventory." },
    ],
  }),
  component: AdminPortal,
});

function AdminPortal() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/get-started">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">CareConnect</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/admin-login">Sign In</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/admin-signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Admin Portal</h1>
            <p className="text-xl text-muted-foreground">
              Manage hospital beds, blood inventory, and monitor system activity with comprehensive dashboards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* New Admin */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-semibold mb-4">New Admin</h2>
              <p className="text-muted-foreground mb-6">
                Create an admin account to manage hospital resources and monitor system activity.
              </p>
              <div>
                <Button className="w-full gap-2 mb-3" size="lg" variant="secondary" asChild>
                  <Link to="/admin-signup">
                    <ShieldCheck className="h-4 w-4" />
                    Create Admin Account
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  💼 Need a hospital working ID to become an admin
                </p>
              </div>
            </Card>

            {/* Existing Admin */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-semibold mb-4">Existing Admin</h2>
              <p className="text-muted-foreground mb-6">
                Sign in with your admin account to access the management dashboard and system controls.
              </p>
              <Button variant="outline" className="w-full gap-2" size="lg" asChild>
                <Link to="/admin-login">
                  <ShieldCheck className="h-4 w-4" />
                  Admin Login
                </Link>
              </Button>
            </Card>
          </div>

          {/* Features List */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-semibold mb-6">What You Can Do</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Manage Bed Allocation</h3>
                  <p className="text-muted-foreground">Control and update bed availability across all hospital departments and facilities.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Inventory Management</h3>
                  <p className="text-muted-foreground">Update and monitor blood inventory levels for all blood types in real-time.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Activity Monitoring</h3>
                  <p className="text-muted-foreground">Monitor system activity and track changes to critical hospital resources.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure Administration</h3>
                  <p className="text-muted-foreground">Enterprise-grade security with role-based access control and encryption.</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 CareConnect. Transforming healthcare management.</p>
        </div>
      </footer>
    </div>
  );
}
