import { render, screen } from '@testing-library/react';
import RestaurantTableHeader from '.';

const context = describe;

describe('RestaurantTableHeader 컴포넌트', () => {
  // given
  beforeEach(() => {
    render(
      <table>
        <RestaurantTableHeader />
      </table>,
    );
  });

  // when
  context('RestaurantTableHeader가 렌더링되면', () => {
    // then
    it('"식당 이름"이 화면에 렌더링된다.', () => {
      expect(screen.getByText('식당 이름')).toBeVisible();
    });

    it('"종류"가 화면에 렌더링된다.', () => {
      expect(screen.getByText('종류')).toBeVisible();
    });

    it('"메뉴"가 화면에 렌더링된다.', () => {
      expect(screen.getByText('메뉴')).toBeVisible();
    });
  });
});
