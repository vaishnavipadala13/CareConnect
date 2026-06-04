import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, ShieldCheck, User, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started - CareConnect" },
      { name: "description", content: "Choose your portal and get started with CareConnect." },
    ],
  }),
  component: GetStarted,
});

function GetStarted() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
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
        {/* Ready to Get Started - Portal Cards Bar */}
        <div className="max-w-5xl mx-auto mb-16 p-8 rounded-lg bg-primary/5 border-2 border-primary/20">
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Get Started</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* User Portal */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors cursor-pointer hover:shadow-lg" asChild>
              <Link to="/user-portal">
                <div className="mb-6">
                  <User className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">User Portal</h3>
                  <p className="text-muted-foreground">
                    View live bed availability, check blood inventory, and access healthcare information in real-time.
                  </p>
                </div>
              </Link>
            </Card>

            {/* Admin Portal */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors cursor-pointer hover:shadow-lg" asChild>
              <Link to="/admin-portal">
                <div className="mb-6">
                  <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Admin Portal</h3>
                  <p className="text-muted-foreground">
                    Manage hospital beds, blood inventory, and monitor system activity with comprehensive dashboards.
                  </p>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 CareConnect. Transforming healthcare management.</p>
        </div>
      </footer>
    </div>
  );
}
