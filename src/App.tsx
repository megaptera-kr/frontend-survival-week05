import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import ReceiptPrinter from './components/ReceiptPrinter';
import Receipt from './types/Receipt';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import FliterCategory from './components/FliterCategory';
import RestaurantTable from './components/RestaurantTable';

export default function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [receipt, setReceipt] = useState<Receipt | undefined>();
  const restaurants = useFetchRestaurants();

  useInterval(
    () => {
      if (receipt?.id) {
        setReceipt(undefined);
      }
    },
    receipt?.id ? 5000 : null,
  );
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <div>
        <div>
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <FliterCategory
            restaurants={restaurants}
            setCategory={setCategory}
          />
        </div>
        <RestaurantTable restaurants={restaurants} category={category} keyword={keyword} />
      </div>
      <ReceiptPrinter receipt={receipt} />
    </>
  );
}
