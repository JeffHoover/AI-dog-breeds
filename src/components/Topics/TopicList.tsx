import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopics, Topic } from '../../services/api';

const TopicList: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTopics()
      .then(data => {
        setTopics(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load topics.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading topics...</p>;
  if (error) return <p>{error}</p>;
  if (topics.length === 0) return <p>No topics available.</p>;

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
