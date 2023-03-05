import { render } from '@testing-library/react';

import Cart from './Cart';

describe('Cart ', () => {
  it('renders without crash', () => {
    const setReceipt = () => {

    }
    render((
      <Cart 
        setReceipt={setReceipt}
      />
    ));
  });
});
