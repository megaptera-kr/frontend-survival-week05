import { renderHook } from '@testing-library/react';
import fixtures from '../fixtures';

import useCreateOrder from './useCreateOrder';

const context = describe;

describe('useCreateOrder', () => {
  context('calls createOrder', () => {
    it('returns receipt', async () => {
      const { result } = renderHook(() => useCreateOrder());
      const { createOrder } = result.current;
      const receipt = await createOrder(fixtures.restaurants[0].menu, 45000);

      expect(receipt).toMatchObject({
        menu: fixtures.restaurants[0].menu,
        totalPrice: 45000,
      });
    });
  });
});

// jest.mock('./useCreateOrder.ts', () => () => ({
//   createOrder: (menu: Food[], totalPrice: number) => ({
//     id: '486',
//     menu,
//     totalPrice,
//   }),
// }));

// describe('useCreateOrder', () => {
//   context('calls createOrder', () => {
//     it('returns receipt', () => {
//       const { createOrder } = useCreateOrder();

//       const receipt = createOrder(fixtures.restaurants[0].menu, 45000);

//       expect(receipt).toMatchObject({
//         menu: fixtures.restaurants[0].menu,
//         totalPrice: 45000,
//       });
//     });
//   });
// });
