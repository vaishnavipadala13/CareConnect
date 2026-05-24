import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, BedDouble, Plus, Trash2 } from "lucide-react";
import {
  useBlood,
  useBeds,
  addBlood,
  deleteBlood,
  updateBlood,
  addBed,
  deleteBed,
  updateBed,
} from "@/lib/store";
import { getSession } from "@/lib/auth";
import { DashboardHeader } from "@/components/DashboardHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — CareConnect" }] }),
  component: AdminPanel,
});

function AdminPanel() {
  const navigate = useNavigate();
  const blood = useBlood();
  const beds = useBeds();

  useEffect(() => {
    const s = getSession();
    if (!s || s.role !== "admin") navigate({ to: "/admin-login" });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader title="Admin Panel" />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Management</h1>

        <Tabs defaultValue="blood">
          <TabsList>
            <TabsTrigger value="blood"><Droplet className="h-4 w-4 mr-2" />Blood</TabsTrigger>
            <TabsTrigger value="beds"><BedDouble className="h-4 w-4 mr-2" />Beds</TabsTrigger>
          </TabsList>

          <TabsContent value="blood" className="mt-6 space-y-6">
            <AddBloodForm />
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Blood Inventory</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group</TableHead>
                    <TableHead>Units</TableHead>
                    <TableHead>Expiry</TableHead>
                    <TableHead className="w-24"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blood.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell className="font-semibold">{b.bloodGroup}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          defaultValue={b.unitsAvailable}
                          className="w-24"
                          onBlur={(e) => {
                            const v = parseInt(e.target.value) || 0;
                            if (v !== b.unitsAvailable) {
                              updateBlood(b.id, { unitsAvailable: v });
                              toast.success("Updated");
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>{b.expiryDate}</TableCell>
                      <TableCell>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            deleteBlood(b.id);
                            toast.success("Deleted");
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="beds" className="mt-6 space-y-6">
            <AddBedForm />
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Bed Allocation</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hospital</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>ICU</TableHead>
                    <TableHead className="w-24"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {beds.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell className="font-medium">{b.hospitalName}</TableCell>
                      <TableCell>{b.totalBeds}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          defaultValue={b.availableBeds}
                          className="w-24"
                          onBlur={(e) => {
                            const v = parseInt(e.target.value) || 0;
                            if (v !== b.availableBeds) {
                              updateBed(b.id, { availableBeds: v });
                              toast.success("Updated");
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          defaultValue={b.icuBeds}
                          className="w-24"
                          onBlur={(e) => {
                            const v = parseInt(e.target.value) || 0;
                            if (v !== b.icuBeds) {
                              updateBed(b.id, { icuBeds: v });
                              toast.success("Updated");
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            deleteBed(b.id);
                            toast.success("Deleted");
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function AddBloodForm() {
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [unitsAvailable, setUnits] = useState(0);
  const [expiryDate, setExpiry] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expiryDate) return;
    addBlood({ bloodGroup, unitsAvailable: Number(unitsAvailable), expiryDate });
    toast.success("Blood unit added");
    setUnits(0);
    setExpiry("");
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Add Blood Unit</h2>
      <form onSubmit={submit} className="grid sm:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <Label>Group</Label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
          >
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label>Units</Label>
          <Input type="number" min="0" value={unitsAvailable} onChange={(e) => setUnits(Number(e.target.value))} />
        </div>
        <div className="space-y-2">
          <Label>Expiry Date</Label>
          <Input type="date" value={expiryDate} onChange={(e) => setExpiry(e.target.value)} required />
        </div>
        <Button type="submit"><Plus className="h-4 w-4 mr-2" />Add</Button>
      </form>
    </Card>
  );
}

function AddBedForm() {
  const [hospitalName, setName] = useState("");
  const [totalBeds, setTotal] = useState(0);
  const [availableBeds, setAvail] = useState(0);
  const [icuBeds, setIcu] = useState(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospitalName) return;
    addBed({ hospitalName, totalBeds, availableBeds, icuBeds });
    toast.success("Hospital added");
    setName("");
    setTotal(0);
    setAvail(0);
    setIcu(0);
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Add Hospital</h2>
      <form onSubmit={submit} className="grid sm:grid-cols-5 gap-4 items-end">
        <div className="space-y-2 sm:col-span-2">
          <Label>Hospital Name</Label>
          <Input value={hospitalName} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label>Total</Label>
          <Input type="number" min="0" value={totalBeds} onChange={(e) => setTotal(Number(e.target.value))} />
        </div>
        <div className="space-y-2">
          <Label>Available</Label>
          <Input type="number" min="0" value={availableBeds} onChange={(e) => setAvail(Number(e.target.value))} />
        </div>
        <div className="space-y-2">
          <Label>ICU</Label>
          <Input type="number" min="0" value={icuBeds} onChange={(e) => setIcu(Number(e.target.value))} />
        </div>
        <Button type="submit" className="sm:col-span-5"><Plus className="h-4 w-4 mr-2" />Add Hospital</Button>
      </form>
    </Card>
  );
}
