import FilterableRestaurants from './components/restaurants/FilterableRestaurants';
import Layout from './components/common/Layout';
import LunchCart from './components/cart/LunchCart';

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
