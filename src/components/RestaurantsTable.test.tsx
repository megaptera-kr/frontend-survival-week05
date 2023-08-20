import { render } from '@testing-library/react';

import RestaurantsTable from './RestaurantsTable';
import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('RestaurantsTable', () => {
  context('restaurants가 주어지면', () => {
    it('테이블을 렌더링한다', () => {
      const { container } = render((
        <RestaurantsTable
          restaurants={restaurants}
        />
      ));
      const table = container.querySelector('table');

      expect(table).toBeInTheDocument();
    });
  });
});
