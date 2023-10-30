import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import OrderButton from './OrderButton';

describe('OrderButton', () => {
  const { foods } = fixtures;

  const onClick = jest.fn();

  function renderOrderButton() {
    render((
      <OrderButton
        foods={foods}
        onClick={onClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders OrderButton', () => {
    renderOrderButton();

    screen.getByText(/합계: 13,000원 주문/);
  });

  it('listens for order button click event', () => {
    renderOrderButton();

    fireEvent.click(screen.getByText(/합계: 13,000원 주문/));

    expect(onClick).toBeCalled();
  });
});
