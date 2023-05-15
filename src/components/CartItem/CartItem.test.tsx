import { fireEvent, render, screen } from '@testing-library/react';

import CartItem from './CartItem';

describe('CartItem', () => {
  const food = {
    id: 'FOOD_ID',
    name: '기본카레',
    price: 9_000,
  };
  const index = 1;

  const handleClickCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    render((
      <CartItem
        food={food}
        index={index}
        onClickCancel={handleClickCancel}
      />
    ));
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('기본카레(9,000원)');
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('취소'));

    expect(handleClickCancel).toBeCalledWith(index);
  });
});
