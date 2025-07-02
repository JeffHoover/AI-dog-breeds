import React, { useState } from 'react';

type LoginPageProps = {
  onSubmit?: (credentials: { email: string; password: string }) => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input">Email</label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        aria-label="Email"
      />

      <label htmlFor="password-input">Password</label>
      <input
        id="password-input"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        aria-label="Password"
      />

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
