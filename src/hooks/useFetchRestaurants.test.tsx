import { renderHook, waitFor } from '@testing-library/react';
import restaurants from '../../fixtures/restaurants';
import useFetchRestaurants from './useFetchRestaurants';

describe('useFetchRestaurants', () => {
  it('return restaurants data', async () => {
    const { result } = renderHook(() => useFetchRestaurants());

    await waitFor(() => {
      expect(result.current).toEqual(restaurants);
    });
  });
});
