import React, { useState } from 'react';

type SignupPageProps = {
  onSubmit?: (data: { email: string; password: string; confirmPassword: string }) => void;
};

const SignupPage: React.FC<SignupPageProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password, confirmPassword });
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

      <label htmlFor="confirm-password-input">Confirm Password</label>
      <input
        id="confirm-password-input"
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        aria-label="Confirm Password"
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupPage;
