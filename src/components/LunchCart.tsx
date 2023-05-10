import Cart from './Cart';
import OrderButton from './OrderButton';

export default function LunchCart() {
  return (
    <div className="w-1/2 flex flex-col item-center">
      <h2 className="text-center font-bold text-2xl">점심 바구니</h2>
      <Cart />
      <OrderButton />
    </div>
  );
}
