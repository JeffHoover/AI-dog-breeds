import React, { useState } from "react";

type NewMessageFormProps = {
  onSubmit: (message: string) => void;
};

const NewMessageForm: React.FC<NewMessageFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit(message.trim());
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message-input">Message</label>
      <input
        id="message-input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-label="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewMessageForm;
