import { render, waitFor, screen } from '@testing-library/react';

import Cart from './Cart';

describe('Cart ', () => {
  it('renders Cart', async () => {
    render(<Cart />);

    await waitFor(() => {
      screen.getByText(/점심 바구니/);
    });
  });
});
