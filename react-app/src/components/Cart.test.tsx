import { render, screen, waitFor } from '@testing-library/react';
import Cart from './Cart';

const context = describe;

describe('Cart Component', () => {
  const setReceipt = jest.fn();
  const handleClickCancel = jest.fn();
  const handleSetFoods = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCart() {
    render(
      <Cart
        setReceipt={setReceipt}
      />,
    );
  }

  it('renders without crash', () => {
    renderCart();
    screen.getByText('점심 바구니');
  });

  // context('when cancel button clicked', () => {
  //   renderCart();
  //   waitFor(() => {
  //     screen.getByText('취소').click();
  //     it('calls `handleClickCancel` and `setFood` functions', () => {
  //       expect(handleClickCancel).toBeCalled();
  //       expect(handleSetFoods).toBeCalled();
  //     });
  //   });
  // });
});
