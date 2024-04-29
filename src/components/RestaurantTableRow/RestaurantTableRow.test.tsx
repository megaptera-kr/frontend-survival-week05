import { render, screen } from '@testing-library/react';
import RestaurantTableRow from '.';
import fixtures from '../../../fixtures';

const context = describe;

describe('RestaurantTableRow 컴포넌트', () => {
  // given
  const restaurant = fixtures.restaurants[0];

  beforeEach(() => {
    render((
      <table>
        <tbody>
          <RestaurantTableRow restaurant={restaurant} />
        </tbody>
      </table>
    ));
  });

  // when
  context('restaurant props가 주어지면', () => {
    it('식당이름이 화면에 렌더링된다.', () => {
      expect(screen.getByText('메가반점')).toBeVisible();
    });

    it('카테고리가 화면에 렌더링된다.', () => {
      expect(screen.getByText('중식')).toBeVisible();
    });

    it('메뉴가 화면에 렌더링된다.', () => {
      expect(screen.getByText(/짜장면/)).toBeVisible();
      expect(screen.getByText(/짬뽕/)).toBeVisible();

      expect(screen.queryByText(/김밥/)).toBeNull(); // 매치되는 것이 없을 때 사용
    });
  });
});
