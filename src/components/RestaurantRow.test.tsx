import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import fixtures from '../fixtures';

const context = describe;

const restaurant = fixtures.restaurants[0];

describe('RestaurantRow', () => {
  function renderRestaurantRow() {
    render(<RestaurantRow restaurant={restaurant} />);
  }
  context('사용자가 페이지에 접속했을 때', () => {
    it('레스토랑 행이 렌더된다', () => {
      renderRestaurantRow();

      screen.getByText('초밥집');
      screen.getByText('우동(2,000원)');
    });
  });
});
