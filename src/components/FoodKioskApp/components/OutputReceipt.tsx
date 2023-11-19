import { Stack, Text } from '../../atoms';

import useLaunchBasketHandler from '../hooks/useLaunchBasketHandler';

export default function OutputReceipt() {
  const { isExistedReceipt, receipt } = useLaunchBasketHandler();

  const { id, menu, totalPrice } = receipt;

  return (
    <Stack $direction="column" id="receipt-wrraper">
      {isExistedReceipt ? (
        <Stack $direction="column" id="receipt">
          <Text as="h2">영수증</Text>
          <Stack $direction="column" id="receipt-id">
            <Text as="h3">주문번호</Text>
            <Text as="p">{id}</Text>
          </Stack>
          <Stack $direction="column" id="receipt-menus">
            <Text as="h3">주문목록</Text>
            {menu?.map(({ name, price }) => (
              <Text as="p" key={Math.random()}>
                {`${name}(${price.toLocaleString()}원)`}
              </Text>
            ))}
          </Stack>
          <Text as="p">{`총 가격: ${totalPrice?.toLocaleString()}원`}</Text>
        </Stack>
      ) : (
        <Text as="h2">[영수증 나오는 곳]</Text>
      )}
    </Stack>
  );
}
