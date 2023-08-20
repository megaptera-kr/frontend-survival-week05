import { render } from '@testing-library/react';

import foods from '../../fixtures/foods';

import MenuList from './MenuList';

describe('MenuList', () => {
  it('menuList를 렌더링한다.', () => {
    const { getByText } = render((
      <MenuList
        menuList={foods}
      />
    ));

    expect(getByText(/짜장면/)).not.toBeNull();
  });
});
