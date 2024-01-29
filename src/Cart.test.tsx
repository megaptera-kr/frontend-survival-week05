import { render, screen } from '@testing-library/react';

import Cart from './Cart';

import foods from '../fixtures/foods';

const setFoods = jest.fn;
jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [foods,
    setFoods],
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Cart', () => {
  const setReceipt = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render title', () => {
    render(<Cart setReceipt={setReceipt} />);
    screen.getByText(/점심 바구니/);
  });

  it('renders order food list', () => {
    render(<Cart setReceipt={setReceipt} />);
    screen.getByText(/짜장면/);
  });
});
