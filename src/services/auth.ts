const TOKEN_KEY = 'dog-breeds-app-token';
process.env.VITE_API_URL = 'http://localhost:5000';
const API_BASE_URL = process.env.VITE_API_URL || '';

// Sign up a user
export async function signup(email: string, password: string): Promise<{ success: boolean }> {
  const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Signup failed: ${response.status}`);
  }

  return await response.json();
}

// Log in a user
export async function login(email: string, password: string): Promise<{ token: string }> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status}`);
  }

  const data = await response.json();
  localStorage.setItem(TOKEN_KEY, data.token);
  return data;
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

export {}; // ensure this is a module
