import React from "react";

type Message = {
  id: string;
  text: string;
};

type MessageListProps = {
  messages: Message[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (messages.length === 0) {
    return <div>No messages.</div>;
  }

  return (
    <ul>
      {messages.map((msg) => (
        <li key={msg.id}>{msg.text}</li>
      ))}
    </ul>
  );
};

export default MessageList;
