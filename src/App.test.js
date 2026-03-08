import { render, screen } from '@testing-library/react';
import PostList from './PostList';
import { MemoryRouter } from 'react-router-dom';

test('renders post list with blog posts', () => {
  render(
    <MemoryRouter>
      <PostList />
    </MemoryRouter>
  );
  const heading = screen.getByText(/Mental Models/i);
  expect(heading).toBeInTheDocument();
});
