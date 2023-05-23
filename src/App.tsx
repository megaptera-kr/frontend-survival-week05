import { useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import Receipt from './types/Receipt';

export default function App() {
  const [receipt, setReceipt] = useLocalStorage<Receipt | null>('receipt', null);

  useInterval(() => {
    setReceipt(null);
  }, receipt ? 5000 : null);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable />
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
