import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Cart from './Cart';
import '../../tests/stub/localStorage';
import { foods } from '../../../fixtures';

const context = describe;

describe('Cart', () => {
  const createReceipts = jest.fn();

  function renderCart() {
    return render(<Cart createReceipts={createReceipts} />);
  }

  function setLocalStorage <T>(id: string, data: T) {
    window.localStorage.setItem(id, JSON.stringify(data));
  }

  beforeEach(() => {
    setLocalStorage('kioskCart', foods);
  });

  it('render correctly', async () => {
    const { asFragment } = renderCart();

    await screen.findByText('짜장면');

    expect(asFragment()).toMatchSnapshot();
  });

  context('when click clear button', () => {
    it('cart is empty', async () => {
      renderCart();

      const clearBtn = screen.getByRole('button', { name: '비우기' });
      userEvent.click(clearBtn);

      await waitFor(() => expect(screen.queryByText('짜장면')).toBeNull());
      await waitFor(() => expect(screen.queryByText('짬뽕')).toBeNull());
      await waitFor(() => expect(screen.queryAllByRole('cell').length).toBe(0));
    });
  });

  context('when click remove button', () => {
    it('food is will be removed from the cart', async () => {
      renderCart();

      const removeBtn = await screen.findByRole('button', { name: /짜장면제거/ });
      userEvent.click(removeBtn);

      await waitFor(() => expect(screen.queryByText('짜장면')).toBeNull());
      await waitFor(() => expect(screen.queryAllByRole('cell').length).toBe(3));
    });
  });

  context('when click order button', () => {
    it('cart is emepty', async () => {
      renderCart();

      const orderBtn = await screen.findByRole('button', { name: '주문하기' });
      userEvent.click(orderBtn);

      await waitFor(() => expect(screen.queryByText('짜장면')).toBeNull());
      await waitFor(() => expect(screen.queryByText('짬뽕')).toBeNull());
      await waitFor(() => expect(screen.queryAllByRole('cell').length).toBe(0));
    });
  });
});
