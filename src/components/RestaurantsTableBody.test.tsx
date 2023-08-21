import { render, screen } from '@testing-library/react';

import restaurants from '../../fixtures/restaurants';

import RestaurantsTableBody from './RestaurantsTableBody';

describe('RestaurantsTableBody', () => {
  it('주어진 레스토랑 목록을 출력한다', () => {
    // When
    render((
      <table>
        <RestaurantsTableBody restaurants={restaurants} />
      </table>
    ));

    // Then
    const name = screen.getByText(/메가반점/);

    expect(name).toBeInTheDocument();
  });
});
