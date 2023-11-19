import { render, waitFor, screen } from '@testing-library/react';

import restaurants from '../../fixtures/restaurants';
import MenuTable from '../../src/components/FoodKioskApp/components/MenuTable';

jest.mock(
  '../../src/components/FoodKioskApp/hooks/useFilteredMenu',
  () => () => ({
    restaurants,
  }),
);

describe('MenuTable', () => {
  it('renders MenuTable', async () => {
    render(<MenuTable />);

    const head = ['식당 이름', '종류', '메뉴'];

    await waitFor(() => {
      head.forEach((ele) => screen.getByText(ele));

      screen.getByText('짬뽕(5,000원)');
      screen.getByText('카레(10,000원)');
      screen.getByText('김밥(3,000원)');
      screen.getByText('짜장면(8,000원)');
    });
  });
});
