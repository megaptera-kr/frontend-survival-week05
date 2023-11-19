// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import foods from '../../../fixtures/foods';
import Menu from './Menu';
import { CartMenuInterface, MenuInterface } from '../../interfaces/RestaurantList.interface';

const context = describe;

const cartItem : CartMenuInterface[] = [];

const onAddCart = (menu : MenuInterface) => {
  cartItem.push(menu);
};

describe('Menues에는 메뉴와 장바구니에 메뉴를 담기위한 함수가 있다.', () => {
  context('메뉴에 짜장면이 있는 조회한다.', () => {
    render(
      <Menu menu={foods[0]} onAddCart={onAddCart} />,
    );
    it('짜장면이 있다.', () => {
      screen.getAllByText('짜장면');
    });
  });

  context('짬뽕을 담는 함수를 실행한다.', () => {
    onAddCart(foods[1]);
    it('카트에 짬뽕이 담겨있다.', () => {
      const checkCartItem = cartItem.find((item) => item.name === '짬뽕');
      expect(checkCartItem).toBeTruthy();
    });
  });
});
