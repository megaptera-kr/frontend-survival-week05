import { renderHook } from '@testing-library/react';

import useCreateOrder from './useCreateOrder';
import fixtures from '../fixtures';

describe('useCreateOrder', () => {
  it('hook 호출 시 createOrder 함수가 반환된다', () => {
    const { result } = renderHook(() => useCreateOrder());
    expect(typeof result.current.createOrder).toBe('function');
  });

  it('createOrder 함수는 receipt 를 반환한다.', async () => {
    const { result } = renderHook(() => useCreateOrder());

    const receipt = await result.current.createOrder(fixtures.menus, 30000);

    expect(receipt).toEqual(fixtures.receipt);
  });
});
