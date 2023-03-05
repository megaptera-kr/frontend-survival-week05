import {
  renderHook, waitFor,
} from '@testing-library/react';
import fixtures from '../fixtures';

import useCreateOrder from './useCreateOrder';

test('useCreateOrder', async () => {
  const { result } = renderHook(() => useCreateOrder());
  const receipt = await result.current.createOrder(fixtures.restaurants[0].menu, 1000);
  await waitFor(() => {
    expect(receipt.totalPrice).toEqual(1000);
  });
});
