import { render, screen } from '@testing-library/react';

import Cart from './Cart';

describe('Cart ', () => {
  it('renders Cart', async () => {
    render(<Cart />);

    const title = screen.getByText(/점심 바구니/);
    expect(title).toBeInTheDocument();
  });
});
