import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import RestaurantRow from './RestaurantRow';

const context = describe;

describe('RestaurantRow', () => {
  const restaurant = fixtures.restaurants[0];
  context('레스토랑 타입의 객체를 전달하면', () => {
    it('식당 이름, 종류, 메뉴가 렌더링 된다', () => {
      render(
        <table>
          <thead />
          <tbody>
            <RestaurantRow
              name={restaurant.name}
              category={restaurant.category}
              menu={restaurant.menu}
            />
          </tbody>
        </table>
        ,
      );

      const name = screen.getByText('메가반점');
      const category = screen.getByText('중식');
      const firstMenu = screen.getByText('짜장면(8,000원)');

      expect(name).toBeInTheDocument();
      expect(category).toBeInTheDocument();
      expect(firstMenu).toBeInTheDocument();
    });
  });
});
