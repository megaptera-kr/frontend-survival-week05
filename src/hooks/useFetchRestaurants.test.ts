import { renderHook, waitFor } from '@testing-library/react';
import useFetchRestaurants from './useFetchRestaurants';
import { restaurants } from '../fixtures';

test('useFetchRestaurants fetch test', async () => {
  const { result: { current: restaurantList } } = renderHook(() => useFetchRestaurants());

  waitFor(() => {
    expect(restaurantList).toEqual(restaurants);
  });
});
