// <restaurants>
// - FilterableRestaurantTable
//  - SearchBar
//   - TextField
//   - Categories
//    - Category
//  - RestaurantTable
//   - RestaurantRow
//    - Menu
//     - MenuItem
import { useInterval, useLocalStorage } from 'usehooks-ts';

import FilterableRestaurantTable from './components/restaurants/FilterableRestaurantTable';
import Cart from './components/cart/Cart';
import ReceiptPrinter from './components/receipt/ReceiptPrinter';

import useFetchRestaurants from './hooks/useFetchRestaurants';

import Receipt from './types/Receipt';

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
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
