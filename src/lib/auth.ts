// Demo credentials for MVP demo
export const DEMO_CREDENTIALS = {
  user: { username: "user", password: "user123" },
  admin: { username: "admin", password: "admin123" },
} as const;

export type Role = "user" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  authMethod: "email" | "google";
  role: Role;
}

export interface Session {
  user: User;
}

const SESSION_KEY = "careconnect_session";
const USERS_KEY = "careconnect_users";

/**
 * Get all registered users from localStorage
 */
function getUsers(): User[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

/**
 * Save users to localStorage
 */
function saveUsers(users: User[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/**
 * Register a new user with email and password
 */
export function registerUser(
  email: string,
  password: string,
  name: string,
  role: Role = "user"
): { success: boolean; error?: string } {
  const users = getUsers();

  // Check if user already exists
  if (users.some((u) => u.email === email)) {
    return { success: false, error: "Email already registered" };
  }

  // Validate email
  if (!email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  // Validate password
  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters" };
  }

  // Create new user
  const newUser: User = {
    id: Math.random().toString(36).substring(2, 11),
    email,
    name,
    authMethod: "email",
    role,
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true };
}

/**
 * Register or login with Google
 */
export function registerWithGoogle(
  email: string,
  name: string,
  role: Role = "user"
): { success: boolean; user: User } {
  const users = getUsers();

  // Check if user exists
  let user = users.find((u) => u.email === email);

  if (!user) {
    // Create new user
    user = {
      id: Math.random().toString(36).substring(2, 11),
      email,
      name,
      authMethod: "google",
      role,
    };
    users.push(user);
    saveUsers(users);
  }

  return { success: true, user };
}

/**
 * Login user with email and password
 */
export function loginWithEmail(
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.authMethod === "email");

  if (!user) {
    return { success: false, error: "Invalid email or password" };
  }

  // In production, use bcrypt for password hashing
  // For demo, simple comparison (not secure!)
  if (password !== btoa(user.email)) {
    return { success: false, error: "Invalid email or password" };
  }

  return { success: true, user };
}

/**
 * Login admin with email and password
 */
export function loginAdminWithEmail(
  email: string,
  password: string
): { success: boolean; user?: User; error?: string } {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.role === "admin" && u.authMethod === "email");

  if (!user) {
    return { success: false, error: "Invalid admin email or password" };
  }

  // In production, use bcrypt for password hashing
  // For demo, simple comparison (not secure!)
  if (password !== btoa(user.email)) {
    return { success: false, error: "Invalid admin email or password" };
  }

  return { success: true, user };
}

/**
 * Legacy login with username and password (demo credentials)
 */
export function login(role: Role, username: string, password: string): boolean {
  const c = DEMO_CREDENTIALS[role];
  if (username === c.username && password === c.password) {
    const demoUser: User = {
      id: role,
      email: `${role}@demo.careconnect.local`,
      name: role === "admin" ? "Admin User" : "Demo User",
      authMethod: "email",
      role,
    };
    setSession({ user: demoUser });
    return true;
  }
  return false;
}

/**
 * Set current session
 */
export function setSession(session: Session): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

/**
 * Get current session
 */
export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

/**
 * Logout user
 */
export function logout(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return getSession() !== null;
}
