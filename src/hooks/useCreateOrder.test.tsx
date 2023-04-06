import { renderHook, waitFor } from '@testing-library/react';
import useCreateOrder from './useCreateOrder';

describe('useCreateOrder', () => {
  it('returns order form', async () => {
    const { result } = renderHook(() => useCreateOrder());
    const { createOrder } = result.current;
    const food = { id: '1', name: '짜장면', price: 8000 };
    const returnValue = await createOrder([food], 8000);

    await waitFor(() => {
      expect(returnValue.menu).toEqual([food]);
    });
  });
});
