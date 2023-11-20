import { useEffect } from 'react';

import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/cart/Cart';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import Receipt from './types/Receipt';
import ReceiptPrinter from './components/restaurants/ReceiptPrinter';
import FilterableRestaurantTable from './components/restaurants/FilterableRestaurantTable';

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

  useInterval(
    () => {
      if (receipt.id) {
        setReceipt(emptyReceipt);
        setFalse();
      }
    },
    value ? 5000 : null,
  );

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
