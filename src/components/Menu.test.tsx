import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import Food from '../types/Food';
import Menu from './Menu';

const context = describe;
const selectedFoods: Food[] = [];
const selectFood = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => ([selectedFoods, selectFood]),
}));

describe('Menu', () => {
  const { menu } = fixtures.restaurants[0];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderMenu() {
    render(<Menu menu={menu} />);
  }

  it('render elements', () => {
    renderMenu();

    screen.getByText(/짜장면/);
    screen.getByText(/차돌짬뽕/);
  });

  context('when click select button', () => {
    it('calls selectFood with selected food', () => {
      renderMenu();

      const selectButton = screen.getAllByText('선택');

      fireEvent.click(selectButton[0]);

      expect(selectFood).toHaveBeenCalledWith([menu[0]]);
    });
  });
});
