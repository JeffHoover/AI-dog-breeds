import React from "react";

type Topic = {
  id: string;
  title: string;
};

type TopicPageProps = {
  topics: Topic[];
};

const TopicPage: React.FC<TopicPageProps> = ({ topics }) => {
  if (topics.length === 0) {
    return <div>No topics found.</div>;
  }

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
};

export default TopicPage;
