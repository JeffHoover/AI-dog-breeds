import React from 'react';
import { render, screen } from '@testing-library/react';
import TopicList from './TopicList';

describe('TopicList Component', () => {
  test('renders loading state initially', () => {
    render(<TopicList />);
    expect(screen.getByText(/loading topics/i)).toBeInTheDocument();
  });

  test('renders list of topic titles', async () => {
    // We'll mock topics data for this test
    const topics = [
      { id: '1', title: 'Labrador Retrievers' },
      { id: '2', title: 'German Shepherds' },
      { id: '3', title: 'Golden Retrievers' },
    ];

    // Render component with topics passed as prop for now
    render(<TopicList topics={topics} />);

    // Expect all topic titles to be rendered
    for (const topic of topics) {
      expect(screen.getByText(topic.title)).toBeInTheDocument();
    }
  });

  test('renders message when no topics exist', () => {
    render(<TopicList topics={[]} />);
    expect(screen.getByText(/no topics available/i)).toBeInTheDocument();
  });
});
