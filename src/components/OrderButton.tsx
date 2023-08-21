import { useLocalStorage } from 'usehooks-ts';
import useFetchCreateReceipt from '../hooks/useFetchCreateReceipt';
import Food from '../type/Food';
import Receipt from '../type/Receipt';
import calcTotalPrice from '../utils/calcTotalPrice';

const emptyitem = {} as Receipt;

export default function OrderButton() {
  const [cartFood, setCartFood] = useLocalStorage<Food[]>('cart', []);
  const [orderReceipt, setOrderReceipt] = useLocalStorage<Receipt>('receipt', emptyitem);
  const totalPrice = calcTotalPrice({ cartFood });
  const handleOrder = async () => {
    const createReceipt = await useFetchCreateReceipt({ cartFood });
    setOrderReceipt(createReceipt);
    setCartFood([]);
    setTimeout(() => {
      setOrderReceipt(emptyitem);
    }, 5000);
  };
  return (
    <button type="button" onClick={handleOrder} name="주문버튼">
      {'합계: '}
      {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      원 주문
    </button>
  );
}
