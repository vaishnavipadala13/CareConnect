import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, User, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/user-portal")({
  head: () => ({
    meta: [
      { title: "User Portal - CareConnect" },
      { name: "description", content: "User portal for accessing bed availability and blood inventory information." },
    ],
  }),
  component: UserPortal,
});

function UserPortal() {
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
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <User className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">User Portal</h1>
            <p className="text-xl text-muted-foreground">
              View live bed availability, check blood inventory, and access healthcare information in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* New User */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-semibold mb-4">New User</h2>
              <p className="text-muted-foreground mb-6">
                Create a new account to access the user portal and start monitoring healthcare information.
              </p>
              <Button className="w-full gap-2" size="lg" asChild>
                <Link to="/signup">
                  <User className="h-4 w-4" />
                  Create User Account
                </Link>
              </Button>
            </Card>

            {/* Existing User */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
              <h2 className="text-2xl font-semibold mb-4">Existing User</h2>
              <p className="text-muted-foreground mb-6">
                Sign in with your existing account to access all features and your personalized dashboard.
              </p>
              <Button variant="outline" className="w-full gap-2" size="lg" asChild>
                <Link to="/login">
                  <User className="h-4 w-4" />
                  User Login
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
                  <h3 className="font-semibold mb-1">Real-time Bed Tracking</h3>
                  <p className="text-muted-foreground">Monitor available hospital beds across multiple facilities in real-time.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Blood Inventory Monitoring</h3>
                  <p className="text-muted-foreground">Check blood types and stock levels instantly across all locations.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure Access</h3>
                  <p className="text-muted-foreground">Enterprise-grade security with end-to-end encryption for all data.</p>
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
