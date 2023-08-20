import useBucketStorage from '../hooks/useBucketStorage';
import usePostOrder from '../hooks/usePostOrder';
import useReceipt from '../hooks/useReceipt';
import priceToLocal from '../utils/priceToLocal';
import BucketList from './BucketList';
import OrderButton from './OrderButton';

export default function Bucket() {
  const {
    bucket, totalPrice, clearBasket, removeMenu,
  } = useBucketStorage();
  const { postOrder } = usePostOrder();
  const { addReceipt } = useReceipt();

  const buttonText = `합계: ${priceToLocal(totalPrice)}원 주문`;

  const handleClickOrder = async () => {
    const { receipt } = await postOrder();

    addReceipt(receipt);
    clearBasket();
  };

  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <BucketList
        bucketList={bucket}
        handleClickRemove={removeMenu}
      />
      <OrderButton
        text={buttonText}
        onClick={handleClickOrder}
      />
    </div>
  );
}
