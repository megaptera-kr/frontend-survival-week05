import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import fixtures from '../../fixtures';

describe('CartItem', () => {
  // given
  const index = 0;
  const food = fixtures.foods[index];
  const onClickCancel = jest.fn();

  const renderCartItem = () => {
    render(
      <CartItem
        food={food}
        index={index}
        onClickCancel={onClickCancel}
      />,
    );
  };

  it('취소 버튼을 렌더링 한다', () => {
    // when
    renderCartItem();

    // then
    screen.getByText('취소');
  });

  it('취소 버튼을 클릭하면 onClickCancel을 호출한다', () => {
    // when
    renderCartItem();
    fireEvent.click(screen.getByText('취소'));

    // then
    expect(onClickCancel).toBeCalledWith(index);
  });
});
