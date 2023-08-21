import { useLocalStorage } from 'usehooks-ts';

import { RestaurantMenuItem } from '../types/restaurants';

export default function useBucketStorage() {
  const [bucket, setBucket] = useLocalStorage<RestaurantMenuItem[]>('bucket', []);
  const totalPrice = bucket.reduce((acc, cur) => acc + cur.price, 0);

  const addMenu = (menu: RestaurantMenuItem) => {
    const newBasket = [...bucket, menu];
    setBucket(newBasket);
  };

  const removeMenu = (menuIndex: number) => {
    const newBasket = bucket.filter((_, index) => index !== menuIndex);
    setBucket(newBasket);
  };

  const clearBasket = () => {
    setBucket([]);
  };

  return {
    bucket,
    totalPrice,
    addMenu,
    removeMenu,
    clearBasket,
  };
}
