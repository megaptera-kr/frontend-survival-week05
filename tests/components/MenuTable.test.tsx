import { render, screen, fireEvent } from '@testing-library/react';

import restaurants from '../../fixtures/restaurants';
import MenuTable from '../../src/components/FoodKioskApp/components/MenuTable';

jest.mock(
  '../../src/components/FoodKioskApp/hooks/useFilteredMenu',
  () => () => ({
    restaurants,
  }),
);

const addMenu = jest.fn();

jest.mock(
  '../../src/components/FoodKioskApp/hooks/useLaunchBasketHandler',
  () => () => ({
    addMenu,
  }),
);

describe('MenuTable', () => {
  it('renders MenuTable', async () => {
    render(<MenuTable />);

    const head = ['식당 이름', '종류', '메뉴'];

    head.forEach((ele) => screen.getByText(ele));
    screen.getByText('짬뽕(5,000원)');
    screen.getByText('카레(10,000원)');
    screen.getByText('김밥(3,000원)');
    screen.getByText('짜장면(8,000원)');
  });
});

describe('FilterCategory Click Event', () => {
  beforeEach(() => {
    addMenu.mockClear();
  });

  it('renders MenuTable', () => {
    render(<MenuTable />);

    const menuItemButton = screen.getByText('짬뽕(5,000원)')
      .nextSibling as HTMLButtonElement;

    fireEvent.click(menuItemButton);

    expect(addMenu).toHaveBeenCalledWith({
      id: 'FOOD_02',
      name: '짬뽕',
      price: 5000,
    });
  });
});
