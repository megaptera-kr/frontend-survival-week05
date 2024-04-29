import { fireEvent, render, screen } from '@testing-library/react';
import Menu from '.';
import fixtures from '../../../fixtures';
import OrdersType from '../../types/Orders';

const context = describe;

describe('Menu 컴포넌트', () => {
  // given
  const menu = fixtures.foods;

  // when
  context('menu props가 빈 배열이라면', () => {
    beforeEach(() => {
      render(<Menu menu={[]} />);
    });

    // then
    it('listItem은 렌더링되지 않는다.', () => {
      const menuItems = screen.queryByRole('listitem');
      expect(menuItems).toBeNull();
    });
  });

  // when
  context('menu props가 빈 배열이 아니라면', () => {
    beforeEach(() => {
      render(<Menu menu={menu} />);
    });

    // then
    it('listItem은 menu 배열의 갯수만큼 렌더링 된다.', () => {
      const menuItems = screen.getAllByRole('listitem');
      expect(menuItems.length).toBe(menu.length);
    });
  });

  // when
  context('menuItem 중 선택 버튼을 클릭하면', () => {
    beforeEach(() => {
      render(<Menu menu={menu} />);

      const menuItemBtns = screen.getAllByRole('button');
      fireEvent.click(menuItemBtns[0]);
    });

    // then
    it('선택한 menuItem이 로컬스토리지 orders의 menu의 마지막 요소로 추가된다.', () => {
      const localOrders: OrdersType = JSON.parse(
        window.localStorage.getItem('orders') ?? '',
      );
      expect(localOrders.menu[localOrders.menu.length - 1].name)
        .toBe(menu[0].name);
    });
  });
});
