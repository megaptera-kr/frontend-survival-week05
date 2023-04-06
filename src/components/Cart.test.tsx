import { render, screen, waitFor } from '@testing-library/react';
import Cart from './Cart';

describe('Cart ', () => {
  it('renders without crash', () => {
    const setReceipt = jest.fn();

    render(<Cart setReceipt={setReceipt} />);
  });
});
