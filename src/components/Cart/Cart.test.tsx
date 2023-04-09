import { screen, render } from '@testing-library/react';
import fixtures from '../../../fixtures';

import Cart from './Cart';

const setFoods = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [fixtures.foods, setFoods],
}));

describe('Cart', () => {
  const setReceipt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    render(<Cart setReceipt={setReceipt} />);

    screen.getByText(/점심 바구니/);
  });

  it('renders order food list', () => {
    render(<Cart setReceipt={setReceipt} />);

    screen.getByText(/짬뽕/);
    screen.getByText(/컵라면/);
  });
});
