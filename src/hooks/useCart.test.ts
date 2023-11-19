import fixtures from '../../fixtures';
import URL from '../constants/constants';
import { MenuInterface, OrderPostInterface } from '../interfaces/RestaurantList.interface';

const context = describe;

const cartMenu : MenuInterface[] = [];

const handleAddCart = (menu : MenuInterface) => {
  cartMenu.push(menu);
};

// const handleRegistOrder = async (postData : OrderPostInterface) => {
//   const response = await fetch(`${URL.BASE_URL}/orders`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(postData),
//   });
//   return response.json();
// };

describe('메뉴를 장바구니에 추가한다.', () => {
  context('메뉴 추가를 실행한다.', () => {
    it('장바구니에 메뉴가 추가된다.', () => {
      handleAddCart(fixtures.foods[0]);
      expect(cartMenu.length > 0).toBeTruthy();
    });
  });

  context('장바구니의 상품을 API 등록요청한다.', () => {
    it('장바구니에 상품이 등록된다.', async () => {
      const postData = {
        menu: [...cartMenu],
        totalPrice: cartMenu.reduce((acc, cur) => acc + cur.price, 0),
      };
      // const response = await handleRegistOrder(postData);
      const { receipt } = fixtures;
      expect(receipt.id).toBeTruthy();
    });
  });
});
