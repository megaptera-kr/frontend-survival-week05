import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('FilterableRestaurantTable 컴포넌트 테스트', () => {
  it('화면 렌더링', async () => {
    await act(async () => {
      render(<FilterableRestaurantTable />);
    });

    screen.getByText('검색');
    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
  });
});
