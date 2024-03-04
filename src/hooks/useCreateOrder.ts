function useCreateOrder() {
  const createOrder = async (
    menu: RestaurantMenuDtoType[],
  ): Promise<ReceiptDtoType> => {
    const url = new URL('http://localhost:3000/orders');

    const order = {
      menu: menu,
      totalPrice: calculateTotalPrice(
        menu.map((item: RestaurantMenuDtoType) => item.price),
      ),
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    const receipt: ReceiptDtoType = await response.json();
    console.log(receipt);

    return receipt;
  };

  return { createOrder };
}

export default useCreateOrder;
