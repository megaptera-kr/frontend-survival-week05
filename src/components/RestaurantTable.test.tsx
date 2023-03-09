import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import fixtures from '../fixtures';

import Restaurant from '../types/Restaurant';

const context = describe;

let restaurants: Restaurant[];

describe('RestaurantTable', () => {
  function renderRestaurantTable() {
    render(<RestaurantTable restaurants={restaurants} />);
  }

  context('사용자가 페이지에 접속하면', () => {
    beforeEach(() => {
      restaurants = fixtures.restaurants;
    });

    it('레스토랑 테이블이 렌더된다', () => {
      renderRestaurantTable();

      screen.getByText('식당 이름');
      screen.getByText('종류');
      screen.getByText('메뉴');

      screen.getByText('초밥집');
      screen.getByText('일식');
      screen.getByText('우동(2,000원)');

      screen.getByText('중국집');
    });
  });
});
