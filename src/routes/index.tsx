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

        {/* Ready to Get Started - CTA Button */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <Button size="lg" asChild className="gap-2 px-8 py-6 text-lg">
            <Link to="/get-started">
              Ready to Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
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
