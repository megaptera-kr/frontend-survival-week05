import useCreateOrder from '../hooks/useCreateOrder';
import { Menu, Receipt, SetValue } from '../types';
import calculateTotalPrice from '../utils/calculateTotalPrice';

type Props = {
    cart : Menu[],
    setCart : SetValue<Menu[]>,
    setReceipt: SetValue<Receipt>
}
function Cart({ cart, setCart, setReceipt }:Props) {
  const totalPrice = calculateTotalPrice(cart);
  const { createOrder } = useCreateOrder();

  const handleCartDelete = (index : number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleOrder = async () => {
    if (cart.length === 0) {
      return;
    }

    const receipt = await createOrder(cart);
    setCart([]);
    setReceipt(receipt);
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((menu, index) => {
          const key = menu.id + index;

          return (
            <li key={key}>
              {menu.name}
              (
              {menu.price.toLocaleString()}
              원
              )
              <button type="button" onClick={() => handleCartDelete(index)}>취소</button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleOrder}>
        합계 :
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}

export default Cart;
