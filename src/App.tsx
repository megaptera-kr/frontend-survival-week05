import Bucket from './components/Bucket';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

export default function App() {
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Bucket />
      <FilterableRestaurantsTable />
    </>
  );
}
