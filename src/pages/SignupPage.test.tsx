import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignupPage from './SignupPage';
import { MemoryRouter } from 'react-router-dom';

describe('SignupPage Component', () => {

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

  test('renders signup form fields and button', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );
    // expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  test('calls handleSubmit when form is submitted', () => {
    const mockSubmit = jest.fn();
    render(<SignupPage onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    });
  });
});
