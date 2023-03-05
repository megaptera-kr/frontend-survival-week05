import { render, renderHook, screen, waitFor } from '@testing-library/react';
import fixtures from '../fixtures';

import useFetchRestaurants from './useFetchRestaurants';

test('useFetchRestaurants', async () => {
	const { result } = renderHook(() => useFetchRestaurants());

	await waitFor(() => {
		expect(result.current).toEqual(fixtures.restaurants);
	});
});
