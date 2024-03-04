/* eslint-disable comma-dangle */
import { useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

import useFetchRestaurant from './hooks/useFetchRestaurant';

import Receipt from './types/Receipt';
import ReceiptPrint from './components/ReceiptPrint';

const emptyReceipt = {} as Receipt;

export default function App() {
  const restaurants = useFetchRestaurant();
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  useInterval(
    () => {
      if (receipt.id) {
        setReceipt(emptyReceipt);
      }
    },
    receipt.id ? 5000 : null
  );

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrint receipt={receipt} />
    </>
  );
}
