import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import TopicList from './components/Topics/TopicList';
import TopicDetail from './components/Topics/TopicDetail';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

const isAuthenticated = true; // Change this logic later based on auth state

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated
                ? <Navigate to="/topics" replace />
                : <Navigate to="/login" replace />
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/topics" element={<TopicList />} />
          <Route
            path="/topics/:id"
            element={<TopicDetail topic={{ id: '123', title: 'Sample Topic' }} messages={[]} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
