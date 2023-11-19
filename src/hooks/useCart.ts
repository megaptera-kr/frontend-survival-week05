import { useState } from 'react';
import { MenuInterface } from '../interfaces/RestaurantList.interface';
import URL from '../constants/constants';

const useCart = () => {
  const [cartMenu, setCartMenu] = useState<MenuInterface[]>([]);

  const handleAddCart = (menu: MenuInterface) => {
    const mergedCartMenu = [...cartMenu];
    mergedCartMenu.push(menu);
    setCartMenu([...mergedCartMenu]);
  };

  const handleRegistOrder = async () => {
    const response = await fetch(`${URL.BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // eslint-disable-next-line no-console
    console.log(response);
    // return restaurants
  };

  return {
    cartMenu,
    setCartMenu,
    handleAddCart,
    handleRegistOrder,
  };
};
export default useCart;
