import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartItem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };

  const index = 1;

  const handleClickCancel = jest.fn();

  function renderCartItem() {
    render((
      <CartItem
        food={food}
        index={index}
        onClickCancel={handleClickCancel}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('짜장면(8,000원)');
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('취소'));

    expect(handleClickCancel).toBeCalledWith(index);
  });
});
