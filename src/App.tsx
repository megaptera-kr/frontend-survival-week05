import { useState } from 'react';
import { useLocalStorage, useInterval } from 'usehooks-ts';
import TextField from './components/TextField';
import CategoryButtons from './components/CategoryButtons';
import { Category, Menu, Receipt } from './types';
import RestaurantTable from './components/RestaurantTable';
import Cart from './components/Cart';
import ReceiptPrinter from './components/ReceiptPrinter';
import useFetchProducts from './hooks/useFetchRestaurants';
import filterRestaurant from './utils/filterRestaurant';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<Category>('전체');
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const data = useFetchProducts();
  const filterData = filterRestaurant(data, { query, category });

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
      <Cart cart={cart} setCart={setCart} setReceipt={setReceipt} />
      <TextField label="검색" value={query} setValue={setQuery} placeholder="식당 이름" />
      <CategoryButtons setCategory={setCategory} />
      <RestaurantTable setCart={setCart} restaurants={filterData} />
      <ReceiptPrinter receipt={receipt} />
    </>

  );
}
