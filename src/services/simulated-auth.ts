// src/api/auth.ts

const TOKEN_KEY = 'dog-breeds-app-token';

// Simulate network delay helper
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Simulate signing up a user
export async function signup(email: string, password: string): Promise<{ success: boolean }> {
  await delay(500);
  // Here you'd call your backend API to create the user
  return { success: true };
}

// Simulate logging in a user
export async function login(email: string, password: string): Promise<{ token: string }> {
  await delay(500);
  // Here you'd call your backend API to get a token
  const token = 'dummy-auth-token';
  localStorage.setItem(TOKEN_KEY, token);
  return { token };
}

// Log out user by removing token
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

// Get stored token
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getToken() !== null;
}

export {}; // make this a module
