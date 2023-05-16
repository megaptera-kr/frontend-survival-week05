import { useInterval } from 'usehooks-ts';
import { useState } from 'react';

import Header from './components/common/Header';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import CartList from './components/cart/CartList';
import ReceiptPrint from './components/receipt/ReceiptPrint';

import Receipt from './types/receipt';

const initialReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useState<Receipt>(initialReceipt);
  useInterval(() => {
    setReceipt(initialReceipt);
  }, receipt.id ? 5_000 : null);

  return (
    <div>
      <Header />
      <CartList setReceipt={setReceipt} />
      <FilterableRestaurantTable />
      <ReceiptPrint receipt={receipt} />
    </div>
  );
}
