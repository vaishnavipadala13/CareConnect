import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ShieldCheck } from "lucide-react";
import { login, setSession } from "@/lib/auth";

export const Route = createFileRoute("/admin-login")({
  head: () => ({ meta: [{ title: "Admin Login — CareConnect" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);
    if (login("admin", username, password)) {
      navigate({ to: "/admin" });
    } else {
      setError("Invalid admin credentials");
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setError("");
    setLoading(true);
    if (login("admin", "admin", "admin123")) {
      navigate({ to: "/admin" });
    } else {
      setError("Demo login failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-8">
      <Card className="w-full max-w-md p-8 border-2 border-primary/20">
        <div className="flex flex-col items-center mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Admin Portal</h1>
          <p className="text-sm text-muted-foreground text-center">
            Manage inventory, beds & system
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Admin Username</Label>
            <Input
              id="username"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              disabled={loading}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button 
            onClick={handleLogin} 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in as Admin"}
          </Button>
        </div>

        <div className="mt-6 text-center border-t pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            Not an admin?
          </p>
          <Button variant="outline" className="w-full mb-2" asChild>
            <Link to="/login">User Login →</Link>
          </Button>
          <Button variant="ghost" className="w-full" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>

        <div className="mt-4 p-3 rounded-md bg-blue-50 dark:bg-blue-950 text-xs text-blue-900 dark:text-blue-100">
          <div className="font-medium mb-2">🔐 Demo Mode</div>
          <p className="mb-2">Username: <code>admin</code></p>
          <p className="mb-3">Password: <code>admin123</code></p>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDemoLogin}
            className="w-full text-xs"
            disabled={loading}
          >
            Auto-fill Demo Credentials
          </Button>
        </div>
      </Card>
    </div>
  );
}
