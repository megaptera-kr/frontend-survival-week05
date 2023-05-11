import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { Restaurants } from '../../types';
import RestaurantTable from './RestaurantTable';

const context = describe;
describe('RestaurantsTable', () => {
  function renderRestaurantsTable(filteredRestaurants:[] | Restaurants[]) {
    render(<RestaurantTable
      filteredRestaurants={filteredRestaurants}
    />);
  }
  context('빈 배열을 전달해 줬을 때', () => {
    it('"식당이 존재하지 않습니다." 문구가 랜더링 된다.', () => {
      renderRestaurantsTable([]);

      const tbody = screen.getByText('식당이 존재하지 않습니다.');

      expect(tbody).toBeInTheDocument();
    });
  });
  context('레스토랑 배열을 전달해 줬을 때', () => {
    it('레스토랑 리스트가 랜더링 된다.', () => {
      renderRestaurantsTable(fixtures.restaurants);

      const restaurant1 = screen.getByText('메가반점');
      const restaurant2 = screen.getByText('메리김밥');
      const restaurant3 = screen.getByText('혹등고래카레');

      expect(restaurant1).toBeInTheDocument();
      expect(restaurant2).toBeInTheDocument();
      expect(restaurant3).toBeInTheDocument();
    });
  });
});
