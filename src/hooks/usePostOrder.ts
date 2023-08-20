import useBucketStorage from './useBucketStorage';

const url = 'http://localhost:3000/orders';

export default function usePostOrder() {
  const { bucket, totalPrice } = useBucketStorage();

  const postOrder = async () => {
    const body = {
      menu: bucket,
      totalPrice,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return response.json();
  };

  return {
    postOrder,
  };
}
