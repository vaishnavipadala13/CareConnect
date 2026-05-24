import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Droplet, BedDouble, ShieldCheck, User } from "lucide-react";

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
      <header className="border-b">
        <div className="container mx-auto px-6 py-4 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-semibold">CareConnect</span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            CareConnect
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time monitoring of bed availability and blood inventory across hospitals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <User className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">User Portal</h2>
            <p className="text-muted-foreground mb-6">
              View live bed availability and blood inventory.
            </p>
            <Button asChild className="w-full">
              <Link to="/login">User Login</Link>
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Admin Portal</h2>
            <p className="text-muted-foreground mb-6">
              Manage blood units and bed allocations.
            </p>
            <Button asChild className="w-full" variant="secondary">
              <Link to="/admin-login">Admin Login</Link>
            </Button>
          </Card>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Card className="p-6 text-center">
            <Droplet className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-medium">Blood Inventory</div>
          </Card>
          <Card className="p-6 text-center">
            <BedDouble className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-medium">Bed Tracking</div>
          </Card>
          <Card className="p-6 text-center">
            <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-medium">Live Updates</div>
          </Card>
        </div>
      </main>
    </div>
  );
}
