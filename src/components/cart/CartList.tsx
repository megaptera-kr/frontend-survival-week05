import { useLocalStorage } from 'usehooks-ts';

import CartListFood from './CartListFood';
import Button from '../common/atoms/button/Button';

import Food from '../../types/food';
import Receipt from '../../types/receipt';

import useCreateReceipt from '../../../hooks/useCreateReceipt';

import cartTotalPrice from '../../utils/cartTotalPrice';

type CartListProps = {
  setReceipt: (value: Receipt) => void;
}

export default function CartList({ setReceipt }: CartListProps) {
  const [selectFood, setSelectFood] = useLocalStorage<Food[]>('food', []);

  const handleRemoveCartClick = (foodIndex: number) => {
    setSelectFood(selectFood.filter((_, index) => index !== foodIndex));
  };

  const handleReceiptAdd = async () => {
    const receipt = await useCreateReceipt({
      menu: selectFood,
      totalPrice: cartTotalPrice(selectFood),
    });
    setReceipt(receipt);
    setSelectFood([]);
  };

  return (
    <div
      className="cart"
      style={{ marginBottom: '3rem' }}
    >
      <h2>점심 바구니</h2>
      <CartListFood
        selectFood={selectFood}
        handleRemoveCartClick={handleRemoveCartClick}
      />
      <Button
        onClick={handleReceiptAdd}
      >
        {`합계: ${cartTotalPrice(selectFood).toLocaleString('ko-kr')}원 주문`}
      </Button>
    </div>
  );
}
