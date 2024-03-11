import { useInterval, useLocalStorage } from 'usehooks-ts';

import Receipt from './types/Receipt';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Cart from './components/cart/Cart';
import FilterableRestaurantTable from './components/restaurantTable/FilterableRestaurantTable';
import ReceiptPrinter from './components/receipt/ReceiptPrinter';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);
  const restaurants = useFetchRestaurants();

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
    }
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable
        restaurants={restaurants}
      />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
