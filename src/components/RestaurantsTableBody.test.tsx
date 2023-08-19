import { render, screen } from '@testing-library/react';

import RestaurantsTableBody from './RestaurantsTableBody';

describe('RestaurantsTableBody', () => {
  it('주어진 레스토랑 목록을 출력한다', () => {
    // Given
    const restaurants = [
      {
        id: '1',
        category: '중식',
        name: '메가반점',
        menu: [
          { id: '1', name: '짜장면', price: 8000 },
          { id: '2', name: '짬뽕', price: 8000 },
          { id: '3', name: '차돌짬뽕', price: 9000 },
          { id: '4', name: '탕수육', price: 14000 },
        ],
      },
    ];

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
