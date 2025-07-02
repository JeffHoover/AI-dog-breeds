// src/types/index.ts

export interface User {
  id: string;
  email: string;
}

export interface Topic {
  id: string;
  title: string;
}

export interface Message {
  id: string;
  topicId: string;
  text: string;
  authorId?: string; // optional, if you want to track who posted
}

export interface AuthResponse {
  token: string;
}

export interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}
