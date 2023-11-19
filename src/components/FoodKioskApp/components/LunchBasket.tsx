import { Button, Stack, Text } from '../../atoms';

import useLaunchBasketHandler from '../hooks/useLaunchBasketHandler';

type LunchBasketProps = {
  title: string;
};

export default function LunchBasket({ title }: LunchBasketProps) {
  const {
    disabled, addedMenus, totalPrice, deleteMenu, orderMenus,
  } = useLaunchBasketHandler();

  const priceText = totalPrice.toLocaleString();

  return (
    <Stack $direction="column" id="lunch-basket-container">
      <Text as="h2" className="title-section">
        {title}
      </Text>

      {addedMenus.length > 0 ? (
        <Stack id="lunch-basket-wrraper" $direction="column">
          {addedMenus.map(({ name, price }, index) => (
            <Stack id="lunch-basket-item" $direction="row" key={Math.random()}>
              {name}
              (
              {price.toLocaleString()}
              원)
              <Button type="button" onClick={() => deleteMenu(index)}>
                취소
              </Button>
            </Stack>
          ))}
        </Stack>
      ) : (
        <Stack id="lunch-basket-wrraper-empty" $direction="column">
          선택된 메뉴가 없습니다.
        </Stack>
      )}

      <Button
        aria-label="order"
        name="order"
        className="cta-button"
        type="button"
        role="button"
        onClick={orderMenus}
        disabled={disabled}
      >
        {`합계: ${priceText}원 주문`}
      </Button>
    </Stack>
  );
}
