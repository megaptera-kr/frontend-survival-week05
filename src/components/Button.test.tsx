import { render, waitFor, screen } from '@testing-library/react';

import Button from './Button';

describe('Button ', () => {
  it('renders Button', async () => {
    render(<Button title="전체" />);

    await waitFor(() => {
      const title = screen.getByText(/전체/);
      expect(title).toBeInTheDocument();
    });
  });
});
