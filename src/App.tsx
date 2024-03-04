import { useInterval } from 'usehooks-ts';

import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import Receipt from './components/Receipt';

import useReceipt from './hooks/useReceipt';

export default function App() {
  const { receipt, handleRemoveAllReceipt } = useReceipt();

  useInterval(
    () => {
      if (receipt.id) {
        handleRemoveAllReceipt();
      }
    },
    receipt.id ? 5000 : null,
  );

  return (
    <div className='m-auto w-7/12	'>
      <h1 className='bg-teal-400 p-4 text-white text-center text-2xl font-bold'>
        푸드코트 키오스크
      </h1>
      <Cart />
      <FilterableRestaurantTable />
      <Receipt receipt={receipt} />
    </div>
  );
}
