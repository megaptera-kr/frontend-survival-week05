import { render, screen, fireEvent } from '@testing-library/react';

import Menu from './Menu';
import fixtures from '../../fixtures';

import MenuType from '../types/MenuType';

const menuItems: MenuType[] = fixtures.foods;

const mockHandleAddMenu = jest.fn();

jest.mock('../hooks/useSelectedMenu', () => () => ({
  handleAddMenu: mockHandleAddMenu,
}));

describe('Menu 컴포넌트', () => {
  const rendering = (menu = menuItems) => {
    render(<Menu menu={menu} />);
  };

  describe('화면이 렌더링 되었을 때', () => {
    it('메뉴 데이터가 존재하지 않는 경우', () => {
      rendering([]);
      expect(screen.getByText('메뉴가 존재하지 않습니다')).toBeInTheDocument();
    });

    it('메뉴 데이터가 존재하는 경우', () => {
      rendering(menuItems);
      menuItems.forEach((item: MenuType) => {
        const { name } = item;
        const regex = new RegExp(`${name}`, 'i');
        expect(screen.getByText(regex)).toBeInTheDocument();
      });

      const buttons = screen.getAllByRole('button', { name: '선택' });
      expect(buttons.length).toBe(menuItems.length);
    });
  });

  describe('렌더링 후 특정 메뉴를 선택했을 때', () => {
    it('handleAddMenu 함수가 호출된다.', () => {
      rendering();
      fireEvent.click(
        screen.getByText('선택', { selector: 'button[name="#짜장면"]' }),
      );

      expect(mockHandleAddMenu).toHaveBeenCalledWith(menuItems[0]);
      expect(mockHandleAddMenu).toHaveBeenCalledWith(menuItems[0]);
      expect(mockHandleAddMenu).toHaveBeenCalledTimes(1);
    });
  });
});
