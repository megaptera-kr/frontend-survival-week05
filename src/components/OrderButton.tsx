import useBucketStorage from '../hooks/useBucketStorage';
import usePostOrder from '../hooks/usePostOrder';
import useReceipt from '../hooks/useReceipt';

import priceToLocal from '../utils/priceToLocal';

type OrderButtonProps = {
  text: string;
  onClick: () => void;
}

export default function OrderButton({ text, onClick }: OrderButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}
