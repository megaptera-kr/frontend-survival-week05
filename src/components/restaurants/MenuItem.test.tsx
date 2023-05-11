import { fireEvent, render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

const context = describe;

describe('MenuItem', () => {
  const item = {
    id: 'FOOD_03',
    name: '김밥',
    price: 3_000,
  };

  const localStorageSetItemMock = jest.spyOn(Storage.prototype, 'setItem');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderMenuItem() {
    render(
      <MenuItem
        title="선택"
        item={item}
      />,
    );
  }

  context('메뉴 타입 아이템을 전달하면 ', () => {
    it('메뉴이름(가격) 버튼이 렌더링 된다', () => {
      renderMenuItem();

      const text = screen.getByText('김밥(3,000원)');
      const button = screen.getByRole('button', { name: '선택' });

      expect(text).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  context('사용자가 메뉴를 선택하면 ', () => {
    it('메뉴가 로컬스토리지에 저장이 된다', () => {
      renderMenuItem();

      const button = screen.getByRole('button', { name: '선택' });

      fireEvent.click(button);

      expect(localStorageSetItemMock).toHaveBeenCalledWith('cart', `[${JSON.stringify(item)}]`);
    });
  });
  context('사용자가 동일 메뉴를 연속으로 선택하면 ', () => {
    it('메뉴가 로컬스토리지에 중복 저장이 된다', () => {
      renderMenuItem();

      const button = screen.getByRole('button', { name: '선택' });

      fireEvent.click(button);
      fireEvent.click(button);

      expect(localStorageSetItemMock).toHaveBeenCalledWith('cart', `[${JSON.stringify(item)},${JSON.stringify(item)}]`);
    });
  });
});
