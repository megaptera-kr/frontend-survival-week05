import { render, screen, waitFor } from '@testing-library/react';

import OutputReceipt from '../../src/components/FoodKioskApp/components/OutputReceipt';
import receipt from '../../fixtures/receipt';

jest.mock(
  '../../src/components/FoodKioskApp/hooks/useLaunchBasketHandler',
  () => () => ({
    isExistedReceipt: true,
    receipt,
  }),
);

describe('OutputReceipt', () => {
  it('renders OutputReceipt', async () => {
    render(<OutputReceipt />);

    await waitFor(() => {
      screen.getByText('주문목록');
    });
  });
});
