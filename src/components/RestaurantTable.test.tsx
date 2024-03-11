import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';
import fixtures from '../../fixtures';
import RestaurantType from '../types/RestaurantsType';

const mockRestaurants: RestaurantType[] = fixtures.restaurants;

jest.mock('../hooks/useRestaurants', () => () => mockRestaurants);

describe('RestaurantTable 컴포넌트 테스트', () => {
  const restaurantName = '';
  const categoryName = '';

  const rendering = () => {
    render(
      <RestaurantTable
        restaurantName={restaurantName}
        categoryName={categoryName}
      />,
    );
  };

  it('화면 렌더링', () => {
    rendering();
    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
    mockRestaurants.forEach((restaurant: RestaurantType) => {
      screen.getByText(restaurant.name);
      screen.getByText(restaurant.category);
    });
  });
});
