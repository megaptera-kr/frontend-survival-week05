import { render, waitFor, screen } from '@testing-library/react';

import App from './App';
import Header from './components/common/Header';
import CartList from './components/cart/CartList';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrint from './components/receipt/ReceiptPrint';
import useReceipt from '../hooks/__mocks__/useReceipt';

describe('App ', () => {
  const setReceipt = jest.fn();
  const receipt = useReceipt();
  const renderApp = () => {
    render(
      <div>
        <Header />
        <CartList setReceipt={setReceipt} />
        <FilterableRestaurantTable />
        <ReceiptPrint receipt={receipt} />
      </div>,
    );
  };

  it('renders header', () => {
    renderApp();

    expect(screen.getByText(/푸드코트 키오스크/)).toBeInTheDocument();
  });

  it('renders carts', () => {
    renderApp();

    expect(screen.getByText(/점심 바구니/)).toBeInTheDocument();
  });

  it('renders receipt', () => {
    renderApp();

    expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
  });
});
