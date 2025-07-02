import React from 'react';

type Topic = {
  id: string;
  title: string;
};

type TopicItemProps = {
  topic: Topic;
  onClick?: () => void;
};

const TopicItem: React.FC<TopicItemProps> = () => {
  return <div>Not implemented yet</div>;
};

export default TopicItem;
