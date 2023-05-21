import { useLocalStorage } from 'usehooks-ts';
import useOrderFoods from '../hooks/useOrderFoods';

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

import CartItem from './CartItem';
import OrderButton from './OrderButton';

const cartItemKey = (name:string, number:number) => (
  `${number}-${name}`
);

interface CartProps{
  setReceipt : React.Dispatch<React.SetStateAction<Receipt|null>>;
}

export default function Cart({ setReceipt } : CartProps) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);

  const handleClickCancel = (index:number) => {
    const newCart = cart.filter((_, i) => (
      i !== index
    ));
    setCart(newCart);
  };

  const handleClickOrder = async () => {
    const receipt = await useOrderFoods(cart);
    setReceipt(receipt);
    setCart([]);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((menu, index) => (
          <CartItem
            key={cartItemKey(menu.name, index + Number(menu.id))}
            menu={menu}
            index={index}
            handleClickCancel={() => handleClickCancel(index)}
          />
        ))}
      </ul>
      <OrderButton cart={cart} handleClickOrder={handleClickOrder} />
    </div>
  );
}
