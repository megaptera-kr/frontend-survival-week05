import { render, screen } from '@testing-library/react';

import Cart from './Cart';

const context = describe;

describe('Cart Component', () => {
  // given
  const setReceipt = jest.fn();

  const renderCart = () => {
    render(<Cart setReceipt={setReceipt} />);
  };

  context('button 태그', () => {
    it('사용해보자', () => {
      // given
      renderCart();
      const $btn = screen.getByRole('button', { name: /합계/ });

      expect($btn).toBeInTheDocument();
      // fireEvent.click($btn);
      // expect(setReceipt).toBeCalled();
    });
  });
});
