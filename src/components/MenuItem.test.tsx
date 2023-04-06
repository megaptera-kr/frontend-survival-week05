import { render } from '@testing-library/react';

import { ReactNode } from 'react';
import MenuItem from './MenuItem';

import fixtures from '../fixtures';

describe('MenuItem', () => {
  const renderMenuItem = (children?: ReactNode) => render(
    <MenuItem food={fixtures.food}>
      {children}
    </MenuItem>,
  );

  it('음식 이름과 가격을 렌더링', () => {
    const { getByText } = renderMenuItem();

    expect(getByText('밥(10,000원)')).toBeInTheDocument();
  });

  it('children 컴포넌트 렌더링', () => {
    // eslint-disable-next-line react/button-has-type
    const { getByTestId } = renderMenuItem(<button data-testid="add-to-cart">Add to cart</button>);

    expect(getByTestId('add-to-cart')).toBeInTheDocument();
  });
});
