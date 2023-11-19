import { CartProps } from '../../interfaces/RestaurantList.interface';
import Menu from '../Menu/Menu';

function Cart({ cartMenu, totalPrice, onRegistOrder } : CartProps) {
  return (
    <div className="cart">
      <h2>장바구니</h2>
      <ul className="menues">
        {cartMenu.map((menu) => <Menu key={`cart_menu_${menu.id}`} menu={menu} />)}
      </ul>
      {totalPrice && (
        <p>
          {totalPrice}
          {' '}
          원
        </p>
      )}
      <button type="button" onClick={onRegistOrder}>주문하기</button>
    </div>
  );
}

export default Cart;
