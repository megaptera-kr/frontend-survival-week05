import { render, screen } from '@testing-library/react';
import CartList from './CartList';

describe('CartList ', () => {
  const setReceipt = jest.fn();
  function renderCart() {
    render(<CartList setReceipt={setReceipt} />);
  }

  it('ui component test', async () => {
    renderCart();

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
