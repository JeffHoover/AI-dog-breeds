import React from 'react';
import { render, screen } from '@testing-library/react';
import TopicDetail from './TopicDetail';

describe('TopicDetail Component', () => {
  const topic = { id: '1', title: 'Labrador Retrievers' };
  const messages = [
    { id: 'm1', text: 'I love Labs!' },
    { id: 'm2', text: 'Great family dog.' },
  ];

  test('renders topic title', () => {
    render(<TopicDetail topic={topic} messages={messages} />);
    expect(screen.getByText(topic.title)).toBeInTheDocument();
  });

  test('renders list of messages', () => {
    render(<TopicDetail topic={topic} messages={messages} />);
    messages.forEach((msg) => {
      expect(screen.getByText(msg.text)).toBeInTheDocument();
    });
  });

  test('renders no messages message when empty', () => {
    render(<TopicDetail topic={topic} messages={[]} />);
    expect(screen.getByText(/no messages yet/i)).toBeInTheDocument();
  });
});
