import useSelectedMenu from '../hooks/useSelectedMenu';

import { calculateTotalMenuPrice, moneyformat } from '../utils/common';

import useReceipt from '../hooks/useReceipt';
import createOrder from '../api/order.api';

import MenuType from '../types/MenuType';
import ReceiptType from '../types/ReceiptType';

type OrderButtonInCartProps = {
  menuItems: MenuType[];
};

export default function OrderButtonInCart({
  menuItems,
}: OrderButtonInCartProps) {
  const { handleRemoveAllMenu } = useSelectedMenu();
  const { handleAddReceipt } = useReceipt();

  const totalPrice: number = calculateTotalMenuPrice(menuItems);
  const formattedPrice: string = moneyformat(totalPrice);

  const handleClick = async () => {
    if (!menuItems.length) {
      return;
    }
    const receipt: ReceiptType = await createOrder(menuItems);
    handleAddReceipt(receipt);
    handleRemoveAllMenu();
  };

  return (
    <button
      className='py-2 px-2 text-sm font-bold bg-teal-400 text-white rounded-xl'
      type='button'
      onClick={handleClick}
    >
      합계: {formattedPrice}원 주문
    </button>
  );
}
