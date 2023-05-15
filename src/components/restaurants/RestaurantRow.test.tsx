import { render, screen, waitFor } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

const context = describe;

describe('RestaurantRow', () => {
  const restaurant = {
    id: 'RESTAURANT_02',
    category: '한식',
    name: '메리김밥',
    menu: [
      {
        id: 'FOOD_03',
        name: '김밥',
        price: 3_000,
      },
    ],
  };

  function renderRestaurantRow() {
    render(
      <RestaurantRow restaurant={restaurant} />,
    );
  }

  context('when restaurant 데이터를 받았을 때', () => {
    it('해당 restaurant의 이름과 카테고리가 보인다.', async () => {
      renderRestaurantRow();
      await waitFor(() => {
        screen.getByText(/한식/);
        screen.getByText(/메리김밥/);
      });
    });
  });
});
