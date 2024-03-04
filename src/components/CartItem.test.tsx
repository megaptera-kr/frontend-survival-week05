import { fireEvent, render } from '@testing-library/react';
import CartItem from './CartItem';
import foods from '../../fixtures/foods';

const context = describe;

describe('CartItem', () => {
  const onClickCancel = jest.fn();
  const index = 0;

  beforeEach(() => {
    onClickCancel.mockClear();
  });

  function renderCartItem() {
    return render(
      // eslint-disable-next-line comma-dangle
      <CartItem food={foods[0]} index={index} onClickCancel={onClickCancel} />
    );
  }

  context('CartItem 렌더링 테스트', () => {
    it('렌더링이 제대로 되는지 테스트', () => {
      const { getByText } = renderCartItem();

      expect(getByText(/짜장면/)).toBeTruthy();
      expect(getByText(/취소/)).toBeTruthy();
    });
  });

  context('MenuItem 컴포넌트의 이벤트 확인', () => {
    it('취소버튼 이벤트 호출되는지 확인 테스트', () => {
      const { getByText } = renderCartItem();

      const cancelButton = getByText('취소');
      fireEvent.click(cancelButton);
      expect(onClickCancel).toBeCalledTimes(1);
      expect(onClickCancel).toHaveBeenCalledWith(index);
    });
  });
});
