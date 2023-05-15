import { useLocalStorage } from 'usehooks-ts';

import { Food } from '../types/food';
import { alreadyHasItem } from '../utils/cart';

interface UseCart {
  cartItems: Food[];
  handleAddCart: (food: Food) => () => void;
  handleRemoveCart: (id: string) => () => void;
  handleClearCart: () => void;
}

export default function useCart(): UseCart {
  const [cartItems, setCartItems] = useLocalStorage<Food[]>('kioskCart', []);

  const handleAddCart = (food: Food) => () => {
    if (alreadyHasItem(cartItems, food)) return;
    setCartItems((prev) => [...prev, food]);
  };

  const handleRemoveCart = (id: string) => () => {
    const filtredCart = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(filtredCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    handleAddCart,
    handleRemoveCart,
    handleClearCart,
  };
}
