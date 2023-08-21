import { render, screen } from '@testing-library/react';
import foods from '../../fixtures/foods';

import MenuListItem from './MenuListItem';

const menu = foods[0];

describe('MenuListItem', () => {
  it('주어진 menu를 출력한다', () => {
    // When
    render((
      <MenuListItem menu={menu} />
    ));

    // Then
    const name = screen.getByText(/짜장면/);

    expect(name).toBeInTheDocument();
  });
});
