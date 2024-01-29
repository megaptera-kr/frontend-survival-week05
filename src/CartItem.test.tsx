import {
  fireEvent, render, screen,
} from '@testing-library/react';

import CartItem from './CartItem';

describe('CartItem', () => {
  const handleClickCancel = jest.fn();
  const index = 0;
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };
  it('render Food information', () => {
    render(<CartItem
      index={0}
      food={food}
      handleClickCancel={handleClickCancel}
    />);
    screen.getByText('짜장면(8,000원)');
  });

  it('triggers handleClickCancel with the correct index on button click', () => {
    render(<CartItem
      index={index}
      food={food}
      handleClickCancel={handleClickCancel}
    />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClickCancel).toBeCalledWith(0);
  });
});
