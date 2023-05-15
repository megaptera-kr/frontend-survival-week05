import { useInterval, useLocalStorage } from 'usehooks-ts';
import Cart from './components/Cart';
import FilterableTable from './components/FilterableTable';
import Receipt from './types/Receipt';
import ReceiptPrinter from './components/ReceiptPrinter';

export default function App() {
  const emptyReceipt = {} as Receipt;
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  useInterval(() => {
    setReceipt(emptyReceipt);
  }, receipt.id ? 5000 : null);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableTable />
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
