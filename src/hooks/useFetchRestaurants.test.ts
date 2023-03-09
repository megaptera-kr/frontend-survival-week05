import { renderHook, waitFor } from '@testing-library/react';
import useFetchRestaurants from './useFetchRestaurants';
import { restaurants } from '../fixtures';

describe('useFetchRestaurants fetch test', () => {
  it('fetch', async () => {
    const { result } = renderHook(() => useFetchRestaurants());

    await waitFor(() => {
      const { current } = result;
      expect(current).toEqual(restaurants);
    });
  });
});
