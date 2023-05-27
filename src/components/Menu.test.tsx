import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';
import fixture from '../../fixture';

const context = describe;
const { foods } = fixture;

const setCartFood = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [
    foods,
    setCartFood,
  ],
}));

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  context('when render a components', () => {
    it('return a text', () => {
      render(<Menu menu={foods[0]} />);
      screen.getByText(/짜장면/);
      screen.getByText(/8,000/);
    });
  });
  context('when click a "선택" button', () => {
    it('return a called', () => {
      render(<Menu menu={foods[0]} />);
      fireEvent.click(screen.getByText('선택'), () => {
        expect(setCartFood).toBeCalled();
      });
    });
  });
});
