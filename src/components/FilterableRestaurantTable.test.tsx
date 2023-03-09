import { render, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

import Restaurant from '../types/Restaurant';
import fixtures from '../fixtures';

const context = describe;

let restaurants: Restaurant[];

describe('FilterableRestaurantTable', () => {
  function renderFilterableRestaurantTable() {
    render(<FilterableRestaurantTable restaurants={restaurants} />);
  }

  context('유저가 페이지에 접속하면', () => {
    beforeEach(() => {
      restaurants = fixtures.restaurants;
    });

    it('검색 바와 테이블이 렌더된다', () => {
      renderFilterableRestaurantTable();

      screen.getByText('초밥집');
      screen.getByText('중국집');
      screen.getByText('탕수육(5,500원)');
    });
  });
});
