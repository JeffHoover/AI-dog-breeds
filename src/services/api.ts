// Simulated API module with placeholder async functions

export type Topic = {
  id: string;
  title: string;
};

export type Message = {
  id: string;
  topicId: string;
  text: string;
};

// Simulate network delay helper
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Fetch all topics
export async function fetchTopics(): Promise<Topic[]> {
  await delay(500);
  return [
    { id: '1', title: 'Labrador Retrievers' },
    { id: '2', title: 'German Shepherds' },
    { id: '3', title: 'Golden Retrievers' },
  ];
}

// Fetch messages for a given topic
export async function fetchMessages(topicId: string): Promise<Message[]> {
  await delay(500);
  return [
    { id: 'm1', topicId, text: 'I love Labs!' },
    { id: 'm2', topicId, text: 'German Shepherds are very smart.' },
  ];
}

// Post a new message (dummy implementation)
export async function postMessage(topicId: string, text: string): Promise<Message> {
  await delay(300);
  return {
    id: Math.random().toString(36).substring(2, 9),
    topicId,
    text,
  };
}

// Sign up a user (dummy)
export async function signup(email: string, password: string): Promise<{ success: boolean }> {
  await delay(500);
  return { success: true };
}

// Log in a user (dummy)
export async function login(email: string, password: string): Promise<{ token: string }> {
  await delay(500);
  return { token: 'dummy-token' };
}

export {}; // ensure this file is a module
