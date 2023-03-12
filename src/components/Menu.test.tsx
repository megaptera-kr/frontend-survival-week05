import { render, screen } from '@testing-library/react';

import Menu from './Menu';

import fixtures from '../fixtures';

describe('Menu', () => {
  it('메뉴 목록 렌더링', () => {
    render(<Menu menu={fixtures.menus} />);

    const foodList = screen.getByRole('list');
    expect(foodList).toBeInTheDocument();
    expect(foodList.childElementCount).toBe(fixtures.menus.length);
  });
});
