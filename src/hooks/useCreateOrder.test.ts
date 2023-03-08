import { renderHook, waitFor } from "@testing-library/react";
import { restaurants } from "../fixtures";
import useCreateOrder from './useCreateOrder';

test('useCreateOrder fetch test', async () => {
  const { result: { current: { createOrder } } } = renderHook(() => useCreateOrder());
  const menu = restaurants[0].menu;
  const totalPrice = menu.reduce((pre, { price }) => pre + price, 0);
  const receipt = await createOrder(menu, totalPrice);
  waitFor(() => {
    expect(receipt).toHaveProperty('id');
    expect(receipt).toHaveProperty('totalPrice');
    expect(receipt).toHaveProperty('menu');
    expect(receipt.totalPrice).toBe(totalPrice);
    expect(receipt.menu).toEqual(menu);
  })
});