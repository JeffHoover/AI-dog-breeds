import React, { useState } from "react";

type NewTopicFormProps = {
  onSubmit: (title: string) => void;
};

const NewTopicForm: React.FC<NewTopicFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic-title">Topic Title</label>
      <input
        id="topic-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create Topic</button>
    </form>
  );
};

export default NewTopicForm;
