import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Droplet, BedDouble, AlertTriangle } from "lucide-react";
import { useBlood, useBeds } from "@/lib/store";
import { getSession } from "@/lib/auth";
import { DashboardHeader } from "@/components/DashboardHeader";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — CareConnect" }] }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const blood = useBlood();
  const beds = useBeds();

  useEffect(() => {
    if (!getSession()) navigate({ to: "/login" });
  }, [navigate]);

  const totalUnits = blood.reduce((s, b) => s + b.unitsAvailable, 0);
  const lowStock = blood.filter((b) => b.unitsAvailable < 5).length;
  const totalAvailableBeds = beds.reduce((s, b) => s + b.availableBeds, 0);
  const totalIcuBeds = beds.reduce((s, b) => s + b.icuBeds, 0);

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader title="Dashboard" />

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Live Hospital Status</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Droplet} label="Total Blood Units" value={totalUnits} />
          <StatCard icon={AlertTriangle} label="Low Stock Alerts" value={lowStock} accent={lowStock > 0} />
          <StatCard icon={BedDouble} label="Available Beds" value={totalAvailableBeds} />
          <StatCard icon={BedDouble} label="ICU Beds Free" value={totalIcuBeds} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Blood Inventory</h2>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Group</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blood.map((b) => {
                  const low = b.unitsAvailable < 5;
                  const expiringSoon = new Date(b.expiryDate).getTime() - Date.now() < 1000 * 60 * 60 * 24 * 30;
                  return (
                    <TableRow key={b.id}>
                      <TableCell className="font-semibold">{b.bloodGroup}</TableCell>
                      <TableCell>{b.unitsAvailable}</TableCell>
                      <TableCell>{b.expiryDate}</TableCell>
                      <TableCell>
                        {low ? (
                          <Badge variant="destructive">Low</Badge>
                        ) : expiringSoon ? (
                          <Badge className="bg-warning text-warning-foreground">Expiring</Badge>
                        ) : (
                          <Badge variant="secondary">OK</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <BedDouble className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Bed Availability</h2>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hospital</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>ICU</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beds.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-medium">{b.hospitalName}</TableCell>
                    <TableCell>{b.totalBeds}</TableCell>
                    <TableCell>
                      <span className={b.availableBeds < 10 ? "text-destructive font-medium" : ""}>
                        {b.availableBeds}
                      </span>
                    </TableCell>
                    <TableCell>{b.icuBeds}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">
          Auto-refreshes every 2 minutes
        </p>
      </main>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        <Icon className={`h-5 w-5 ${accent ? "text-destructive" : "text-primary"}`} />
      </div>
      <div className={`text-3xl font-bold ${accent ? "text-destructive" : ""}`}>{value}</div>
    </Card>
  );
}
