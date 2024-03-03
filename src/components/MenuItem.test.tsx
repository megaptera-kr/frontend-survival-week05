import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import MenuItem from './MenuItem';

// given
const [item] = fixtures.foods;
const { name, price } = item;
const children = 'children';

const renderMenuItem = () => {
  render(<MenuItem food={item} />);
};

describe('MenuItem', () => {
  it('메뉴 이름과 가격을 렌더링 한다', () => {
    // when
    renderMenuItem();

    // then
    screen.getByText(`${name}(${price.toLocaleString()}원)`);
  });

  it('children을 렌더링 한다', () => {
    // when
    render(<MenuItem food={item}>{children}</MenuItem>);

    // then
    screen.getByText(children);
  });
});
