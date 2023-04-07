import useCart from '../../hooks/useCart';
import CartTable from './cartTable/CartTable';
import CartUtils from './cartUtils/Cartutils';
import useCreateOrder from './hooks/useCreateOrder';
import { calcTotalPrice } from '../../utils/cart';
import { Receipts } from '../../types/receipt';

interface CartProps {
  createReceipts: (receipts: Receipts) => void;
}

export default function Cart({ createReceipts }: CartProps) {
  const { cartItems, handleRemoveCart, handleClearCart } = useCart();
  const { createOrder } = useCreateOrder();

  const handleCreateOrder = async () => {
    const receipt = await createOrder(cartItems);
    createReceipts(receipt);
    handleClearCart();
  };

  const totalPrice = calcTotalPrice(cartItems);
  return (
    <article>
      <h2>장바구니</h2>
      <CartUtils
        totalPrice={totalPrice}
        handleClearCart={handleClearCart}
        handleOrder={handleCreateOrder}
      />
      <CartTable
        cartItems={cartItems}
        handleRemoveCart={handleRemoveCart}
      />
    </article>
  );
}
