import FilterableRestaurants from './components/FilterableRestaurants';
import Layout from './components/Layout';
import LunchCart from './components/LunchCart';

export default function App() {
  return (
    <Layout
      title="푸드코트 키오스크"
    >
      <FilterableRestaurants />
      <LunchCart />
    </Layout>
  );
}
