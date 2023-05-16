import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Testing Header Component', () => {
  render(<Header />);

  expect(screen.getByText(/푸드코트 키오스크/)).toBeInTheDocument();
});
