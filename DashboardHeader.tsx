import { Activity, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { logout, getSession } from "@/lib/auth";
import { useEffect, useState } from "react";

export function DashboardHeader({ title }: { title: string }) {
  const navigate = useNavigate();
  const [session, setSession] = useState<{ role: string; username: string } | null>(null);

  useEffect(() => {
    setSession(getSession());
  }, []);

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
  };

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-semibold">CareConnect</span>
          <span className="text-muted-foreground hidden sm:inline">— {title}</span>
        </Link>
        <div className="flex items-center gap-3">
          {session && (
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {session.username} ({session.role})
            </span>
          )}
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
