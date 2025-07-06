import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';
import { login } from '../../services/api';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = await login(email, password);

      localStorage.setItem('dog-breeds-app-token', token.token);
      console.log(
        'Login successful, token:',
        localStorage.getItem('dog-breeds-app-token')
      );

      // 🔥 notify App about successful login
      onLogin();

      // redirect to home page
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally show an error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
