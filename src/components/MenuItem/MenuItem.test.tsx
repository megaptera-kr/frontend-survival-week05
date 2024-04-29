import { render, screen } from '@testing-library/react';
import MenuItem from '.';
import fixtures from '../../../fixtures';
import { convertKRW } from '../../utils';

const context = describe;

describe('MenuItem 컴포넌트', () => {
  const menuItem = fixtures.foods[0];
  const addMenuItem = jest.fn();

  context('menuItem props가 주어지면', () => {
    render(<MenuItem menuItem={menuItem} addMenuItem={addMenuItem} />);

    it('name과 원화로 변환된 금액, "선택" 버튼이 렌더링된다.', () => {
      const krwRegExp = new RegExp(convertKRW(menuItem.price));
      screen.getByText(/짜장면/);
      screen.getByText(krwRegExp);
      const selectBtn = screen.getByRole('button');
      expect(selectBtn.textContent).toBe('선택');
    });
  });
});
