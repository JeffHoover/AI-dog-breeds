import React from 'react';

type Topic = {
  id: string;
  title: string;
};

type TopicItemProps = {
  topic: Topic;
  onClick?: () => void;
};

const TopicItem: React.FC<TopicItemProps> = ({ topic, onClick }) => {
  return <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
    {topic.title}
  </div>;
};

export default TopicItem;
