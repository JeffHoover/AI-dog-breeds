import React from 'react';

type Topic = {
  id: string;
  title: string;
};

type TopicListProps = {
  topics?: Topic[];
};

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  if (!topics) {
    return <div>Loading topics...</div>;
  }

  if (topics.length === 0) {
    return <div>No topics available.</div>;
  }

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
};

export default TopicList;
