import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import fixtures from '../../fixtures';

describe('Cart', () => {
  const { foods } = fixtures;

  const onDeleteCart = jest.fn();
  const setCart = jest.fn();
  const setReceipt = jest.fn();

  function renderCart() {
    render((
      <Cart
        cart={foods}
        onDeleteCart={onDeleteCart}
        setCart={setCart}
        setReceipt={setReceipt}
      />
    ));
  }

  it('renders title', () => {
    renderCart();

    screen.getByText(/점심 바구니/);
  });

  it('renders order food list', () => {
    renderCart();

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
