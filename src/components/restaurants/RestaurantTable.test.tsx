import { render, screen, waitFor } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import filterRestaurants from '../../utils/filterRestaurants';

import restaurants from '../../../fixtures/restaurants';

const context = describe;

describe('RestaurantTable', () => {
  function renderRestaurantTable(filterText: string, filterCategory: string) {
    const filteredRestaurants = filterRestaurants(
      restaurants,
      { filterText, filterCategory },
    );

    render(
      <RestaurantTable restaurants={filteredRestaurants} />,
    );
  }

  it('renders restaurant table', async () => {
    renderRestaurantTable('', '전체');

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });

  context('when input text="메" category="한식"', () => {
    it('메리김밥의 restaurants 데이터만 보인다.', async () => {
      renderRestaurantTable('메', '한식');

      await waitFor(() => {
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
        expect(screen.queryByText(/메가반점/)).toBeNull();
      });
    });
  });
});
