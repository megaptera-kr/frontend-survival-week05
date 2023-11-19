import Cart from './containers/Cart';
import Receipt from './containers/Receipt';
import Restaurants from './containers/Resturants';
import './styles.css';

export default function App() {
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <div className="column">
        <Cart />
        <Restaurants />
        <h2>[영수증 나오는 곳]</h2>
        <Receipt />
      </div>
    </div>
  );
}
