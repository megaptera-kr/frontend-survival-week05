import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';
import foods from '../../fixtures/foods';

const context = describe;

describe('Menu', () => {
  const onClick = jest.fn();

  function renderMenuComponent() {
    render(<Menu menu={foods} />);
  }

  beforeEach(() => {
    onClick.mockClear();
    // 또는 jest.clearAllMocks();
  });

  context('화면이 렌더링 된 후', () => {
    it('음식 메뉴들이 화면에 출력되는지 확인', () => {
      // When
      renderMenuComponent();

      // Then
      expect(screen.getByText(/짜장면/)).toBeTruthy();
      expect(screen.getByText(/짬뽕/)).toBeTruthy();
      expect(screen.getByText(/8,000원/)).toBeTruthy();
    });
  });

  context('선택 버튼 기능 테스트', () => {
    it('localStorage에 저장되었는지 확인', () => {
      // When
      const { getByTestId } = render(<Menu menu={foods} />);
      const selectButton = getByTestId('짜장면_FOOD_01_0');
      fireEvent.click(selectButton);

      // Then
      const storedCartString = localStorage.getItem('cart');
      const storedCart = storedCartString ? JSON.parse(storedCartString) : null;
      expect(storedCart).toEqual([foods[0]]); // 첫 번째 음식이 선택되었는지 확인
    });
  });
});
