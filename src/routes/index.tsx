import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Droplet, BedDouble, ShieldCheck, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareConnect" },
      { name: "description", content: "Real-time hospital bed availability and blood inventory monitoring." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-[28px] font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" style={{ fontFamily: "Montserrat" }}>
            Healthcare at Your Fingertips
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            CareConnect provides real-time monitoring of bed availability and blood inventory across hospitals, making healthcare management seamless and efficient.
          </p>
        </div>

        {/* Ready to Get Started - Portal Cards Bar */}
        <div className="max-w-5xl mx-auto mb-16 p-8 rounded-lg bg-primary/5 border-2 border-primary/20">
          <h2 className="text-3xl font-bold text-center mb-8">Ready to Get Started</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* User Portal */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <User className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">User Portal</h3>
                <p className="text-muted-foreground">
                  View live bed availability, check blood inventory, and access healthcare information in real-time.
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">New User?</p>
                  <Button className="w-full gap-2" asChild>
                    <Link to="/signup">
                      <User className="h-4 w-4" />
                      Create User Account
                    </Link>
                  </Button>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Already have an account?</p>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link to="/login">
                      <User className="h-4 w-4" />
                      User Login
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Admin Portal */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
              <div className="mb-6">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Admin Portal</h3>
                <p className="text-muted-foreground">
                  Manage hospital beds, blood inventory, and monitor system activity with comprehensive dashboards.
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">New Admin?</p>
                  <Button variant="secondary" className="w-full gap-2" asChild>
                    <Link to="/admin-signup">
                      <ShieldCheck className="h-4 w-4" />
                      Create Admin Account
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    💼 Need a hospital working ID to become an admin
                  </p>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Already an admin?</p>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link to="/admin-login">
                      <ShieldCheck className="h-4 w-4" />
                      Admin Login
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-lg transition-all hover:scale-105">
            <BedDouble className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Bed Availability</h2>
            <p className="text-muted-foreground">
              Real-time tracking of available hospital beds across multiple facilities.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all hover:scale-105">
            <Droplet className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blood Inventory</h2>
            <p className="text-muted-foreground">
              Monitor blood types and stock levels instantly across all locations.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all hover:scale-105">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">Secure & Reliable</h2>
            <p className="text-muted-foreground">
              Enterprise-grade security with end-to-end encryption for all data.
            </p>
          </Card>
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
