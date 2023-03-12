import { render } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import fixtures from '../fixtures';

describe('RestaurantRow', () => {
  it(' 레스토랑 이름, 카테고리 및 메뉴를 렌더링', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <RestaurantRow restaurant={fixtures.restaurants[0]} />
        </tbody>
      </table>,
    );

    expect(getByText(fixtures.restaurants[0].name)).toBeInTheDocument();
    expect(getByText(fixtures.restaurants[0].category)).toBeInTheDocument();
    expect(getByText('탕수육(14,000원)')).toBeInTheDocument();
  });
});
