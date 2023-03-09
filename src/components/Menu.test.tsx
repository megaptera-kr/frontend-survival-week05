import { fireEvent, render, screen } from '@testing-library/react';

import Menu from './Menu';

import fixtures from '../fixtures';

import Food from '../types/Food';

let selectedFoods: Food[];
const selectFood = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [
    selectedFoods,
    selectFood,
  ],
}));

const context = describe;

let menu: Food[];

describe('Menu', () => {
  function renderMenu() {
    render(<Menu menu={menu} />);
  }

  context('페이지가 렌더되면', () => {
    beforeEach(() => {
      menu = fixtures.selectedFoods;
      selectedFoods = [];
    });

    it('각 식당 별 메뉴가 렌더된다', () => {
      renderMenu();

      screen.getByText('볶음밥(3,000원)');

      fireEvent.click(screen.getAllByText('선택')[0]);

      expect(selectFood).toBeCalledWith([{ id: '1', name: '볶음밥', price: 3000 }]);
    });
  });
});
