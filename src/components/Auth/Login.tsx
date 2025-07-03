import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css'; // adjust import if needed
import { login } from '../../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Logging in with:', email, password);

    var token = await login(email, password);

    // TODO - Do something better than just storing the token in localStorage
    localStorage.setItem('dog-breeds-app-token', token.token);
    console.log('Login successful, token:', localStorage.getItem('dog-breeds-app-token'));

    // TODO - should / be a home page?
    // Simulate login success:
    navigate('/');
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
