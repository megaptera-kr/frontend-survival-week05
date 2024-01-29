import { useEffect, useState } from 'react';
import _ from 'lodash';

import Cart from './Cart';
import FilterableRestaurantTable from './FilterableRestaurantTable';
import ReceiptPrinter from './ReceiptPrinter';

import useFetchRestaurants from './hooks/useFetchRestaurants';

import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [restaurants] = useFetchRestaurants();
  const [receipt, setReceipt] = useState<Receipt>({}as Receipt);

  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    if (!_.isEmpty(receipt)) {
      timer = setTimeout(() => {
        setReceipt(emptyReceipt);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [receipt]);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <div>
        <FilterableRestaurantTable restaurants={restaurants} />
      </div>
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
