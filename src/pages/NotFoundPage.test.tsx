import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('renders 404 not found message and image', () => {
  render(<NotFoundPage />);
  expect(screen.getByText(/ran away like a squirrel/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /go back home/i })).toHaveAttribute('href', '/');
  expect(screen.getByAltText(/confused dog/i)).toBeInTheDocument();
});
