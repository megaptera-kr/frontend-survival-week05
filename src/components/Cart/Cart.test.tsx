import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '.';
import { OrderContext, OrderContextValue } from '../../contexts/OrderContext';
import receipt from '../../../fixtures/receipt';
import cart from '../../../fixtures/foods';
import { postOrders } from '../../apis';

jest.mock('../../apis', () => ({
  postOrders: jest.fn(),
}));

const renderCart = (props: OrderContextValue) => {
  render(<Cart />, {
    wrapper: ({ children }) => (
      <OrderContext.Provider value={props}>
        {children}
      </OrderContext.Provider>
    ),
  });
};

describe('<Cart/>', () => {
  it('OrderContext에 cart가 있는 경우, 장바구니 정보를 화면에 렌더링 해야 합니다.', () => {
    // Given, When
    renderCart({ cart, receipt });

    const menu1 = screen.getByText(/짜장면\(8,000원\)/i);
    const menu2 = screen.getByText(/짬뽕\(5,000원\)/i);
    const orderButton = screen.getByRole('button', { name: /합계: 13,000원 주문/i });

    // Then
    expect(menu1).toBeInTheDocument();
    expect(menu2).toBeInTheDocument();
    expect(orderButton).toBeInTheDocument();
  });

  it('취소 버튼을 클릭한 경우, 해당 아이템이 제거된 새로운 장바구니가 setCart의 인자로 전달되어야 합니다.', () => {
    // Given
    const setCart = jest.fn();
    renderCart({ cart: [cart[0]], receipt, setCart });

    const removeButton = screen.getByRole('button', { name: /취소/i });

    // When
    fireEvent.click(removeButton);

    // Then
    expect(setCart).toHaveBeenCalledWith([]);
  });

  it('주문 버튼을 클릭한 경우, order API가 호출되고 OrderContext의 setCart가 호출되어야 합니다.', async () => {
    // Given
    const setReceipt = jest.fn();
    const setCart = jest.fn();
    (postOrders as jest.Mock).mockImplementation(() => Promise.resolve(receipt));

    renderCart({
      cart: [cart[0]], receipt, setCart, setReceipt,
    });

    // When
    await fireEvent.click(screen.getByRole('button', { name: /주문/i }));

    // Then
    expect(setCart).toHaveBeenCalledWith([]);
    expect(setReceipt).toHaveBeenCalledWith(receipt);
  });
});
