import React from "react";

type Topic = {
  id: string;
  title: string;
};

type Message = {
  id: string;
  text: string;
};

type TopicDetailProps = {
  topic: Topic;
  messages: Message[];
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, messages }) => {
  return (
    <div>
      <h2>{topic.title}</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopicDetail;
