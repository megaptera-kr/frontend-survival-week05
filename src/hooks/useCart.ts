import { useState } from 'react';
import { MenuInterface, OrderPostInterface } from '../interfaces/RestaurantList.interface';
import URL from '../constants/constants';

const useCart = () => {
  const [cartMenu, setCartMenu] = useState<MenuInterface[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCart = (menu: MenuInterface) => {
    const mergedCartMenu = [...cartMenu];
    mergedCartMenu.push(menu);
    const sum = mergedCartMenu.reduce((acc, cur) => acc + cur.price, 0);
    setCartMenu([...mergedCartMenu]);
    setTotalPrice(sum);
  };

  const handleRegistOrder = async (postData : OrderPostInterface) => {
    const response = await fetch(`${URL.BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    return response.json();
  };

  return {
    cartMenu,
    setCartMenu,
    handleAddCart,
    handleRegistOrder,
    totalPrice,
  };
};
export default useCart;
