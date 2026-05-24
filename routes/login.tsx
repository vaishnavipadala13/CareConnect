import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User } from "lucide-react";
import { login } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "User Login — CareConnect" }] }),
  component: UserLogin,
});

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login("user", username, password)) {
      navigate({ to: "/dashboard" });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <User className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">User Login</h1>
          <p className="text-sm text-muted-foreground">Sign in to view the dashboard</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="button" onClick={handleLogin} className="w-full">Login</Button>
        </div>

        <div className="mt-6 p-3 rounded-md bg-muted text-xs text-muted-foreground">
          <div className="font-medium mb-1">Demo credentials:</div>
          <div>Username: <code>user</code></div>
          <div>Password: <code>user123</code></div>
        </div>

        <div className="mt-4 text-center text-sm">
          <Link to="/admin-login" className="text-primary hover:underline">Admin login →</Link>
        </div>
      </Card>
    </div>
  );
}
