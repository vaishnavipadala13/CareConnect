// Temporary credentials for MVP demo (replace with real auth later)
export const CREDENTIALS = {
  user: { username: "user", password: "user123" },
  admin: { username: "admin", password: "admin123" },
} as const;

export type Role = "user" | "admin";

const KEY = "bbt_session";

export function login(role: Role, username: string, password: string): boolean {
  const c = CREDENTIALS[role];
  if (username === c.username && password === c.password) {
    localStorage.setItem(KEY, JSON.stringify({ role, username }));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(KEY);
}

export function getSession(): { role: Role; username: string } | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}
