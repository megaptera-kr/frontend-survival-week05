import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import fixtures from '../../fixtures';

const menuItem = fixtures.foods[0];

describe('MenuItem 컴포넌트', () => {
  it('화면 렌더링 되었을 때', () => {
    render(<MenuItem menuItem={menuItem} />);
    expect(screen.getByText('짜장면(8,000원)')).toBeInTheDocument();
  });

  it('children prop이 정상적으로 렌더링되는지 테스트', () => {
    render(
      <MenuItem menuItem={menuItem}>
        <button type='button'>주문하기</button>
      </MenuItem>,
    );

    expect(
      screen.getByRole('button', { name: /주문하기/ }),
    ).toBeInTheDocument();
  });
});
