import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {

  const isAuthPage = false;

  return (
    <header>
      <h1>Dog Breeds App</h1>
      <nav>
        {!isAuthenticated && !isAuthPage && (
          <>
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
          </>
        )}

        {isAuthenticated && (
          <>
            <Link to="/home">Home</Link> | <Link to="/topics">Topics</Link> |{" "}
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
