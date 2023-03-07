import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import fixtures from '../../fixtures';
import Cart from './Cart';

const context = describe;
const selectedFoods = [fixtures.restaurants[0].menu[0], fixtures.restaurants[0].menu[1]];
const setFoods = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => ([selectedFoods, setFoods]),
}));

describe('Cart', () => {
  const setReceipt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCart() {
    render((
      <Cart setReceipt={setReceipt} />
    ));
  }

  it('renders elements', () => {
    renderCart();

    screen.getByText(/점심 바구니/);
  });

  context('when the state of selectedFoods changes', () => {
    it('renders selectedFoods', async () => {
      renderCart();

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  context('when click cancel button', () => {
    it('calls setFoods with deleted 짜장면 setFoods List', () => {
      renderCart();

      const cancelButton = screen.getAllByText('취소');
      const foods = fixtures.restaurants[0].menu[1];

      fireEvent.click(cancelButton[0]);

      expect(setFoods).toHaveBeenCalledWith([foods]);
    });
  });

  context('when click order button', () => {
    it('calls setReceipt and setFoods', async () => {
      renderCart();

      const orderButton = screen.getByText(/합계/);

      fireEvent.click(orderButton);

      await waitFor(() => {
        expect(setReceipt).toHaveBeenCalled();
        expect(setFoods).toHaveBeenCalledWith([]);
      });
    });
  });
});
