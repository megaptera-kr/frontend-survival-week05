import { render, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

import restaurants from '../fixtures/restaurants';

const context = describe;
describe('FilterableRestaurantTable', () => {
  context('render FilterableRestaurantTable', () => {
    it('해당 네임을 가진 식당이름을 렌더링한다.', () => {
      render(<FilterableRestaurantTable restaurants={restaurants} />);
      screen.getByText(/메가반점/);
      screen.getByText(/혹등고래/);
    });
  });
});
