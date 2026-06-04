import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Droplet, BedDouble, ShieldCheck, User, Mail, ArrowRight } from "lucide-react";

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
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" asChild className="gap-2">
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link to="/login">
                Already have an account?
              </Link>
            </Button>
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

        {/* Authentication Methods */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Sign Up in Seconds</h2>
          <p className="text-muted-foreground mb-8">
            Choose your preferred authentication method
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Gmail</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up with your Google account for instant access
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/signup">Continue with Gmail</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
              <User className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email & Password</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create an account with your email and secure password
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
            </Card>
          </div>

          <div className="mt-6 text-center text-sm border-t pt-6">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>

        {/* Portal Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <User className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-semibold mb-2">User Portal</h2>
                <p className="text-muted-foreground mb-6">
                  View live bed availability, check blood inventory, and access healthcare information in real-time.
                </p>
              </div>
            </div>
            <Button asChild className="w-full gap-2">
              <Link to="/signup">
                <User className="h-4 w-4" />
                User Sign Up
              </Link>
            </Button>
          </Card>

          <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Admin Portal</h2>
                <p className="text-muted-foreground mb-6">
                  Manage hospital beds, blood inventory, and monitor system activity with comprehensive dashboards.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Button asChild variant="outline" className="w-full gap-2">
                <Link to="/admin-login">
                  <ShieldCheck className="h-4 w-4" />
                  Admin Login
                </Link>
              </Button>
              <Button asChild variant="secondary" className="w-full gap-2">
                <Link to="/admin-signup">
                  <ShieldCheck className="h-4 w-4" />
                  Create Admin Account
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="max-w-2xl mx-auto text-center mb-12 p-8 rounded-lg bg-primary/5 border border-primary/10">
          <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of healthcare professionals using CareConnect to improve patient care.
          </p>
          <Button size="lg" asChild className="gap-2">
            <Link to="/signup">
              Create Your Account Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
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
