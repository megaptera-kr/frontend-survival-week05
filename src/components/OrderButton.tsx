import useBucketStorage from '../hooks/useBucketStorage';
import usePostOrder from '../hooks/usePostOrder';
import useReceipt from '../hooks/useReceipt';

import priceToLocal from '../utils/priceToLocal';

export default function OrderButton() {
  const { totalPrice, clearBasket } = useBucketStorage();
  const { postOrder } = usePostOrder();
  const { addReceipt } = useReceipt();

  const buttonText = `합계: ${priceToLocal(totalPrice)}원 주문`;

  const handleClickOrder = async () => {
    const { receipt } = await postOrder();

    addReceipt(receipt);
    clearBasket();
  };

  return (
    <button type="button" onClick={() => handleClickOrder()}>
      {buttonText}
    </button>
  );
}
