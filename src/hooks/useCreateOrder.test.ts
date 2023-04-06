import { renderHook, waitFor } from '@testing-library/react';
import useCreateOrder from './useCreateOrder';

describe('useCrreateOrder', () => {
  it('return receipt', async () => {
    const { result } = renderHook(() => useCreateOrder());
    const { createOrder } = result.current;
    const food = { id: '123', name: '짜장면', price: 8800 };
    const receipt = await createOrder([food], 8000);

    await waitFor(() => {
      expect(receipt.menu).toEqual([food]);
    });
  });
});
