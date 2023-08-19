import { screen, render } from '@testing-library/react';

import RestaurantsTable from './RestaurantsTable';

const context = describe;

describe('RestaurantsTable', () => {
  context('restaurants가 주어지면', () => {
    it('테이블을 렌더링한다', () => {
      const { container } = render((
        <RestaurantsTable
          restaurants={[
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
          ]}
        />
      ));
      const table = container.querySelector('table');

      expect(table).toBeInTheDocument();
    });
  });
});
