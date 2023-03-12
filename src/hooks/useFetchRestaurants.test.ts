import { renderHook, waitFor } from '@testing-library/react';

import useFetchRestaurants from './useFetchRestaurants';

import fixtures from '../fixtures';

describe('useFetchRestaurants', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('서버에서 데이터를 잘 가져오는 경우 restaurants 을 반환한다.', async () => {
    const { result } = renderHook(() => useFetchRestaurants());

    await waitFor(() => {
      expect(result.current).toEqual(fixtures.restaurants);
    });
  });

  it('서버에서 데이터를 가져오지 못했을 때는 빈 배열을 리턴한다.', () => {
    jest.mock('usehooks-ts', () => ({
      useFetch: () => ({ data: null }),
    }));

    const { result } = renderHook(() => useFetchRestaurants());

    expect(result.current).toEqual([]);
  });
});
