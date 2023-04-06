import { renderHook, waitFor } from '@testing-library/react';
import fixtures from '../fixtures';
import useFetchRestaurants from './useFetchRestaurants';

describe('useFetchRestaurants', () => {
  it('returns restaurants', async () => {
    const { result } = renderHook(() => useFetchRestaurants());

    await waitFor(() => {
      expect(result.current).toEqual(fixtures.restaurants);
    });
  });
});
