import { render, screen } from '@testing-library/react';
import fixture from '../../fixture';
import Cart from './Cart';

const setCartFood = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [
    fixture.foods,
    setCartFood,
  ],
}));

describe('Cart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('when render components', () => {
    render(<Cart />);
    screen.getByText('점심 바구니');
  });
  it('when render food list', () => {
    render(<Cart />);
    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
