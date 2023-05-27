import { fireEvent, render, screen } from '@testing-library/react';
import OrderButton from './OrderButton';

const context = describe;

jest.mock('../utils/calcTotalPrice', () => () => (6000));

describe('OrderButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  context('when render it', () => {
    it('return', () => {
      render(<OrderButton />);
      screen.getByText(/6,000원 주문/);
    });
  });
  context('when press button', () => {
    it('return', () => {
      render(<OrderButton />);
      fireEvent.click(screen.getByText('합계: 6,000원 주문'), () => {
        screen.getByText('합계: 0원 주문');
      });
    });
  });
});
