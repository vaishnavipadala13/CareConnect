import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Mail } from "lucide-react";
import { registerUser, registerWithGoogle, setSession } from "@/lib/auth";

export const Route = createFileRoute("/admin-signup")({
  head: () => ({ meta: [{ title: "Admin Sign Up — CareConnect" }] }),
  component: AdminSignUp,
});

function AdminSignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    const result = registerUser(email, password, name, "admin");

    if (result.success) {
      // Auto-login after signup
      setSession({
        user: {
          id: Math.random().toString(36).substring(2, 11),
          email,
          name,
          authMethod: "email",
          role: "admin",
        },
      });
      navigate({ to: "/admin" });
    } else {
      setError(result.error || "An error occurred");
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    setError("");
    setLoading(true);

    // Simulate Google OAuth - in production, use Google OAuth library
    const mockGoogleUser = {
      name: "Google Admin",
      email: `admin_${Math.random().toString(36).substring(7)}@gmail.com`,
    };

    const result = registerWithGoogle(mockGoogleUser.email, mockGoogleUser.name, "admin");

    if (result.success) {
      setSession({ user: result.user });
      navigate({ to: "/admin" });
    } else {
      setError("Google sign-up failed. Please try again.");
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
          <h1 className="text-2xl font-bold">Admin Sign Up</h1>
          <p className="text-sm text-muted-foreground text-center">
            Create an admin account to manage CareConnect
          </p>
        </div>

        <div className="space-y-4">
          {/* Email signup form */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Admin Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignUp()}
              disabled={loading}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleSignUp}
            className="w-full"
            disabled={loading}
          >
            {loading ? "Creating Admin Account..." : "Create Admin Account"}
          </Button>

          {/* Divider */}
          <div className="relative my-4">
            <Separator />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
              <span className="bg-background px-2 text-xs text-muted-foreground">
                OR
              </span>
            </div>
          </div>

          {/* Google OAuth Button */}
          <Button
            variant="outline"
            onClick={handleGoogleSignUp}
            className="w-full gap-2"
            disabled={loading}
          >
            <Mail className="h-4 w-4" />
            Sign up with Gmail
          </Button>
        </div>

        {/* Login link */}
        <div className="mt-6 text-center text-sm border-t pt-6">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/admin-login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </div>

        {/* Info box */}
        <div className="mt-6 p-3 rounded-md bg-blue-50 dark:bg-blue-950 text-xs text-blue-900 dark:text-blue-100">
          <div className="font-medium mb-1">🔐 Admin Access</div>
          <div>For testing, use any email and password (6+ chars)</div>
        </div>
      </Card>
    </div>
  );
}
