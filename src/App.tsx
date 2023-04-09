import { useEffect } from 'react';
import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart/Cart';

import Receipt from './types/Receipt';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import FilteredRestaurantTable from './components/FilteredRestaurantTable/FilteredRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter/ReceiptPrinter';

const emptyReceipt = {} as Receipt;

export default function App() {
  const { value, setTrue, setFalse } = useBoolean(false);
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);
  const restaurants = useFetchRestaurants();

  useEffect(() => {
    setFalse();

    if (receipt.id) {
      setTrue();
    }
  }, [receipt]);

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
      setFalse();
    }
  }, value ? 5000 : null);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilteredRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
