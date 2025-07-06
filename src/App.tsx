import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import HomePage from "./pages/HomePage";
import TopicList from "./components/Topics/TopicList";
import TopicDetail from "./components/Topics/TopicDetail";
import NotFoundPage from "./pages/NotFoundPage";
import { getToken, logout } from "./services/auth";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/topics" element={<TopicList />} />
          <Route
            path="/topics/:id"
            element={
              <TopicDetail
                topic={{ id: "123", title: "Sample Topic" }}
                messages={[]}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
