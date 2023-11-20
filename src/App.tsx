import { useLocalStorage, useInterval } from 'usehooks-ts';
import { Receipt } from './types';
import Cart from './components/Cart';
import ReceiptPrinter from './components/ReceiptPrinter';

import FilterableRestaurantTable from './components/FilterableRestaurantTable';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  useInterval(
    () => {
      if (receipt.id) {
        setReceipt(emptyReceipt);
      }
    },
    receipt.id ? 5000 : null,
  );

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable />
      <ReceiptPrinter receipt={receipt} />
    </>

  );
}
