import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import fixtures from '../../fixtures';

import RestaurantType from '../types/RestaurantsType';
import MenuType from '../types/MenuType';

const restaurant: RestaurantType = fixtures.restaurants[0];

describe('RestaurantRow 컴포넌트 테스트', () => {
  const rendering = () => {
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>,
    );
  };

  it('화면 렌더링', () => {
    rendering();
    screen.getByText('중식');
    screen.getByText('메가반점');

    restaurant.menu.forEach((menuItem: MenuType) => {
      const regex = new RegExp(menuItem.name, 'i');
      screen.getByText(regex);
    });
  });
});
