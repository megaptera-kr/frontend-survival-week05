/* eslint-disable no-shadow */
import { render } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';
import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('FilterableRestaurantTable', () => {
  function renderFilterableRestaurantTable() {
    return render(<FilterableRestaurantTable restaurants={restaurants} />);
  }

  context('FilterableRestaurantTable 컴포넌트 렌더링 테스트', () => {
    it('렌더링이 제대로 되는지 테스트', () => {
      // When
      const { getByText, getAllByText } = renderFilterableRestaurantTable();

      // Then
      expect(getByText(/검색/)).toBeInTheDocument();
      expect(getByText('전체')).toBeInTheDocument();
      expect(getAllByText('일식')[0]).toBeInTheDocument();
      expect(getAllByText('일식')[1]).toBeInTheDocument();
    });
  });
});
