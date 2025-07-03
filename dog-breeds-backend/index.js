const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy data
let topics = [
  { id: '1', title: 'Labrador Retrievers' },
  { id: '2', title: 'German Shepherds' },
  { id: '3', title: 'Golden Retrievers' },
];

let messages = [
  { id: 'm1', topicId: '1', text: 'I love Labs!' },
  { id: 'm2', topicId: '2', text: 'German Shepherds are so smart!' },
];

// Routes

app.get('/api/topics', (req, res) => {
  res.json(topics);
});

app.get('/api/topics/:id/messages', (req, res) => {
  const topicId = req.params.id;
  const topicMessages = messages.filter((msg) => msg.topicId === topicId);
  res.json(topicMessages);
});

app.post('/api/topics/:id/messages', (req, res) => {
  const topicId = req.params.id;
  const text = req.body.text;

// TODO - Don't allow duplicate "topicId"s

  const newMessage = {
    id: Math.random().toString(36).substring(2, 9),
    topicId,
    text,
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// Dummy auth route
app.post('/api/auth/signup', (req, res) => {
  // In a real app, you'd save the user and hash their password
  console.log('New signup:', req.body);
  res.json({ success: true });
});

app.post('/api/auth/login', (req, res) => {
  // In a real app, you'd check credentials
    console.log('Login:', req.body);

  res.json({ token: 'dummy-token' });
});

app.listen(5000, () => {
  console.log('API running on http://localhost:5000');
});


