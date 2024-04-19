import { FilterableRestaurantTable, Orders, Receipt } from './components';

export default function App() {
  return (
    <>
      <h1>푸드코트 키오스크</h1>

      <Orders />

      <FilterableRestaurantTable />

      <Receipt />
    </>
  );
}
