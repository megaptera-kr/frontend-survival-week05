import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import restaurants from '../fixtures/restaurants';

describe('RestaurantTable', () => {
  it('테이블 헤더가 렌더링된다.', () => {
    render(<RestaurantTable filteredCategories={restaurants} />);
    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
  });
});
