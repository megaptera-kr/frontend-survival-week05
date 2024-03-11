import MenuType from '../types/MenuType';
import ReceiptType from '../types/ReceiptType';

async function createOrder(menu: MenuType[]): Promise<ReceiptType> {
  const url = new URL('http://localhost:3000/orders');
  const totalPrice = menu.reduce((acc, cur) => acc + cur.price, 0);

  const body = {
    menu,
    totalPrice,
  };

  try {
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to create order. Status: ${response.status}`);
    }

    const data: ReceiptType = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to create order`);
  }
}

export default createOrder;
