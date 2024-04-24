import { render, screen } from '@testing-library/react';
import RestaurantTable from '.';
import fixtures from '../../../fixtures';

const context = describe;

describe('RestaurantTable 컴포넌트', () => {
  // given
  const { restaurants } = fixtures;

  beforeEach(() => {
    render(<RestaurantTable restaurants={restaurants} />);
  });

  // when
  context('RestaurantTable 컴포넌트가 렌더링되면', () => {
    // then
    it('RestaurantTable 컴포넌트가 렌더링된다.', () => {
      expect(screen.getByText('한식')).toBeInTheDocument();
    });

    it('RestaurantTableHeader 컴포넌트가 렌더링된다.', () => {
      expect(screen.getByText('식당 이름')).toBeInTheDocument();
    });

    it('restaurants의 길이만큼 행이 렌더링된다.', () => {
      const rows = screen.getAllByRole('row');
      expect(rows.length).toBe(restaurants.length + 1); // thead의 row있으니 +1
    });

    it('restaurant의 name이 렌더링된다.', () => {
      restaurants.forEach((restaurant) => {
        const { name } = restaurant;
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it('restaurant의 category가 렌더링된다.', () => {
      restaurants.forEach((restaurant) => {
        const { category } = restaurant;
        expect(screen.getByText(category)).toBeInTheDocument();
      });
    });

    it('restaurant의 menu의 item이 렌더링된다.', () => {
      restaurants.forEach((restaurant) => {
        const { menu } = restaurant;
        menu.forEach((menuItem) => {
          const regex = new RegExp(menuItem.name);
          const menuItemElems = screen.getAllByText(regex);
          menuItemElems.forEach((menuItemElem) => {
            expect(menuItemElem).toBeInTheDocument();
          });
        });
      });
    });
  });
});
