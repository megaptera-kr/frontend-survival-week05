import { render, screen } from '@testing-library/react';

import Cart from './Cart';
import fixtures from '../../fixtures';

const setSelectMenu = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [
    fixtures.foods,
    setSelectMenu,
  ],
}));

describe('Cart ', () => {
  const setReceipt = jest.fn();

  it('renders Cart', async () => {
    render(<Cart setReceipt={setReceipt} />);

    const title = screen.getByText(/점심 바구니/);
    expect(title).toBeInTheDocument();
  });

  it('renders order food list', () => {
    render(<Cart setReceipt={setReceipt} />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
    screen.getByText(/합계: 13,000원 주문/);
  });
});
