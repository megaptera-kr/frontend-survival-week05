import { render, screen } from '@testing-library/react';
import ResturantsList from './ResturantsList';

describe('RestaurantsList Component', () => {
  test('RestaurantsList 은 식당 목록 데이터가 있다면 레스토랑 목록을 그린다.', async () => {
    render(<ResturantsList />);
    const element = await screen.findByTestId('ResturantsItemRESTAURANT_01');

    expect(element).toBeInTheDocument();
  });
});
