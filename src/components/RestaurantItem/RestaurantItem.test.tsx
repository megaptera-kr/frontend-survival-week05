import { render, screen, waitFor } from '@testing-library/react';
import RestaurantItem from './RestaurantItem';
import restaurants from '../../../fixtures/restaurants';

const handleAddCart = () => {
  console.log('handle')
};

describe('매장의 내용이 나타난다.', () => {
  it('구매내용이 올바르게 노출된다.', async () => {
    render(<RestaurantItem restaurant={restaurants[0]} handleAddCart={handleAddCart} />);
    screen.getByText(/메가/);
  });
});
