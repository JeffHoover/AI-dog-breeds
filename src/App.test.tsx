import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock components to isolate App tests
jest.mock('./components/Auth/Login', () => () => <div>Login Page</div>);
jest.mock('./components/Auth/Signup', () => () => <div>Signup Page</div>);
jest.mock('./components/Topics/TopicList', () => () => <div>Topic List Page</div>);
jest.mock('./components/Topics/TopicDetail', () => () => <div>Topic Detail Page</div>);

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg) => {
    if (
      typeof msg === 'string' &&
      msg.includes('React Router Future Flag Warning')
    ) {
      return;
    }
    console.warn(msg);
  });
});

describe('App Routing', () => {
  test('renders Login on /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App isAuthenticated={false} />
      </MemoryRouter>
    );
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  test('renders Signup on /signup route', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App isAuthenticated={false} />
      </MemoryRouter>
    );
    expect(screen.getByText(/signup page/i)).toBeInTheDocument();
  });

  test('renders TopicList on /topics route', () => {
    render(
      <MemoryRouter initialEntries={['/topics']}>
        <App isAuthenticated={true} />
      </MemoryRouter>
    );
    expect(screen.getByText(/topic list page/i)).toBeInTheDocument();
  });

  test('renders TopicDetail on /topics/:id route', () => {
    render(
      <MemoryRouter initialEntries={['/topics/123']}>
        <App isAuthenticated={true} />
      </MemoryRouter>
    );
    expect(screen.getByText(/topic detail page/i)).toBeInTheDocument();
  });

  test('redirects from / to /login when unauthenticated', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App isAuthenticated={false} />
      </MemoryRouter>
    );
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });

  test('redirects from / to /topics when authenticated', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App isAuthenticated={true} />
      </MemoryRouter>
    );
    expect(screen.getByText(/topic list page/i)).toBeInTheDocument();
  });
});
