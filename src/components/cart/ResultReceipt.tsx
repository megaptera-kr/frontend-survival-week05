import { useInterval, useLocalStorage } from 'usehooks-ts';
import orderInitialValue from '../../utils/orderInitialValue';
import { Receipt } from '../../types';

const DELAY = 5000;
export default function ResultReceipt() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', orderInitialValue);
  useInterval(
    () => {
      setReceipt(orderInitialValue);
    },
    receipt.id ? DELAY : null,
  );
  return receipt.id === '' ? (
    <div className="w-full text-center mt-10">[영수증 나오는 곳]</div>
  ) : (
    <div className="w-full h-[45%] flex flex-col justify-between border-2 border-green-400 text-center py-4 mt-4">
      <h3 className="text-2xl font-bold my-2">영수증</h3>
      <h3 className="text-xl font-bold my-1">주문번호</h3>
      <div>
        {receipt.id}
      </div>
      <h3 className="text-xl font-bold my-1">주문메뉴</h3>
      {receipt.menu.map((menu) => (
        <div key={menu.id}>
          {menu.name}
          (
          {menu.price.toLocaleString()}
          원)
        </div>
      ))}
      <div className="text-xl font-bold my-2">
        {`총 가격: ${receipt.totalPrice.toLocaleString()}원`}
      </div>
    </div>
  );
}
