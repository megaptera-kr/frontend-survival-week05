/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';

import Cart from './Cart';

describe('App ', () => {
  it('renders without crash', () => {
    const setReceipt = jest.fn();

    render(<Cart setReceipt={setReceipt} />);
  });
});
