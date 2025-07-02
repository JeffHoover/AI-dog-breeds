import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
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
describe('AppRoutes Component', () => {
  test('renders HomePage at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText(/welcome to dog breeds app/i)).toBeInTheDocument();
  });

  test('renders LoginPage at /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  test('renders SignupPage at /signup', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  test('renders TopicPage at /topics', () => {
    render(
      <MemoryRouter initialEntries={['/topics']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText(/no topics found/i)).toBeInTheDocument();
  });
});
