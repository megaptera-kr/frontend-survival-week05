import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Cart', () => {
  const setReceipt = jest.fn();

  function renderCart() {
    return render(<Cart setReceipt={setReceipt} />);
  }

  it('랜더링 요소 확인 테스트', () => {
    renderCart();
    expect(screen.getByText('점심 장바구니')).toBeTruthy();
    expect(screen.getByText(/합계/)).toBeTruthy();
  });

  /*
  context('취소 버튼 기능 테스트', () => {
    it('localStorage에 삭제되었는지 확인', () => {
      // Given
      // useLocalStorage에 대한 cart selectedFood 대한 고민 필요
      localStorage.setItem('cart', JSON.stringify(foods));
      // When
      const { getByText } = renderCart();
      const selectButton = getByText('취소');
      fireEvent.click(selectButton);

      // Then
      // expect(localStorageSpy).toHaveBeenCalledTimes(1);
      // expect(localStorageSpy).toHaveBeenCalledWith('cart');
    });
  });
  */
});
