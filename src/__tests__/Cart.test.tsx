import { render } from '@testing-library/react';
import Cart from '../components/Cart';

describe('Cart', () => {
  it('Render without errors', () => {
    const setReceipt = jest.fn();
    render(<Cart setReceipt={setReceipt} />);
  });
});
