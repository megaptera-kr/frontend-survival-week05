import { render, screen, waitFor } from '@testing-library/react';
import fixtures from '../../../fixtures';

import FilterableRestaurantTable from './FilterableRestaurantTable';

const context = describe;

describe('FilterableRestaurantTable', () => {
  const { restaurants } = fixtures;

  function renderFilterableRestaurantTable() {
    render(<FilterableRestaurantTable restaurants={restaurants} />);
  }

  context('처음 화면을 렌더링 할 때', () => {
    it('모든 restaurants가 표시되야 한다', async () => {
      renderFilterableRestaurantTable();

      await waitFor(() => {
        screen.getByText(/메가반점/);
        screen.getByText(/메리김밥/);
      });
    });

    it('categories가 적힌 버튼이 모두 표시되야 한다', async () => {
      renderFilterableRestaurantTable();

      await waitFor(() => {
        expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '일식' })).toBeInTheDocument();
      });
    });
  });
});
