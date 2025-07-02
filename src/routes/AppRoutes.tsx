import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import TopicPage from '../pages/TopicPage';
import NotFoundPage from '../pages/NotFoundPage';
import TopicDetail from '../components/Topics/TopicDetail';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/topics" element={<TopicPage topics={[]} />} />
      <Route
        path="/topics/:id"
        element={
          <TopicDetail
            topic={{ id: '123', title: 'Topic 123' }}
            messages={[
              { id: '1', text: 'This is message one' },
              { id: '2', text: 'Another message' }
            ]}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
