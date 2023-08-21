import { fireEvent, render, screen } from '@testing-library/react';
import fixture from '../../fixture';
import CartItem from './CartItem';

const context = describe;
const index = 0;
const setCartFood = jest.fn();
jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [
    fixture.foods,
    setCartFood,
  ],

}));

describe('CartItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  context('when render components', () => {
    it('return list name', () => {
      render(<CartItem menu={fixture.foods[0]} index={index} />);
      screen.getByText(/짜장면/);
      screen.getByText(/8,000/);
    });

    context('when press the button', () => {
      it('return notting', () => {
        render(<CartItem menu={fixture.foods[0]} index={index} />);
        fireEvent.click(screen.getByText('취소'), () => {
          screen.getByText('');
        });
      });
    });
  });
});
