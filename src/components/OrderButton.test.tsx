import { fireEvent, render, screen } from '@testing-library/react';
import OrderButton from './OrderButton';
import fixtures from '../../fixtures';
import calculateTotalPrice from '../utils/calculateTotalPrice';

describe('OrderButton', () => {
  // given
  const onClick = jest.fn();
  const { foods } = fixtures;
  const totalPrice = calculateTotalPrice(foods);
  const regex = new RegExp(`${totalPrice.toLocaleString()}`, 'g');

  const renderOrderButton = () => {
    render(
      <OrderButton
        foods={foods}
        onClick={onClick}
      />,
    );
  };

  it('합계 금액을 렌더링 한다', () => {
    // when
    renderOrderButton();

    // then
    screen.getByText(regex);
  });

  it('버튼을 클릭하면 onClick을 호출한다', () => {
    // when
    renderOrderButton();
    fireEvent.click(screen.getByText(regex));

    // then
    expect(onClick).toBeCalled();
  });
});
