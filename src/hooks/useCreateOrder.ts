import axios from 'axios';

import Food from '../types/Food';

const url = 'http://localhost:3000/orders';

const useCreateOrder = () => {
  const createOreder = async (menu: Food[]) => {
    const totalPrice = menu.reduce((acc, food) => food.price + acc, 0);
    const response = await axios.post(url, { menu, totalPrice });
    return response.data.receipt;
  };
  return createOreder;
};

export default useCreateOrder;
