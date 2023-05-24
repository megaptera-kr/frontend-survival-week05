import { useLocalStorage } from 'usehooks-ts';
import Cart from './components/Cart';
import DefaultPrint from './components/DefaultPrint';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import ReceiptPrinter from './components/ReceiptPrinter';
import useFetchGet from './hooks/useFetchGet';
import Receipt from './type/Receipt';

const emptyitem = {} as Receipt;

export default function App() {
  const restaurants = useFetchGet();
  const [orderReceipt, setOrderReceipt] = useLocalStorage<Receipt>('receipt', emptyitem);
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <FilterableRestaurantsTable
        restaurants={restaurants}
      />
      {
        orderReceipt.id ? <ReceiptPrinter orderReceipt={orderReceipt} /> : <DefaultPrint />
      }
    </>
  );
}
