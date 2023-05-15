import { render, screen } from '@testing-library/react';
import Receipt from '.';
import { OrderContext, OrderContextValue } from '../../contexts/OrderContext';
import receipt from '../../../fixtures/receipt';

const renderReceipt = (props: OrderContextValue) => {
  render(<Receipt />, {
    wrapper: ({ children }) => (
      <OrderContext.Provider value={props}>
        {children}
      </OrderContext.Provider>
    ),
  });
};

describe('<Receipt/>', () => {
  it('OrderContext에 receipt가 있는 경우, 영수증 정보를 화면에 렌더링 해야 합니다.', () => {
    // Given, When
    renderReceipt({ cart: [], receipt });

    const receiptTitle = screen.getByRole('heading', { name: /영수증/i });
    const orderNumber = screen.getByRole('heading', { name: /주문번호/i });
    const orderList = screen.getByRole('heading', { name: /주문목록/i });

    // Then
    expect(receiptTitle).toBeInTheDocument();
    expect(orderNumber).toBeInTheDocument();
    expect(orderList).toBeInTheDocument();
  });

  it('OrderContext에 receipt가 있는 경우, 영수증 정보를 화면에 렌더링 해야 합니다.', () => {
    // Given, When
    render(<Receipt />);

    const receiptTitle = screen.queryByRole('heading', { name: /영수증/i });
    const orderNumber = screen.queryByRole('heading', { name: /주문번호/i });
    const orderList = screen.queryByRole('heading', { name: /주문목록/i });

    // Then
    expect(receiptTitle).not.toBeInTheDocument();
    expect(orderNumber).not.toBeInTheDocument();
    expect(orderList).not.toBeInTheDocument();
  });
});
