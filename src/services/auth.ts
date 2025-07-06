const TOKEN_KEY = "dog-breeds-app-token";

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
