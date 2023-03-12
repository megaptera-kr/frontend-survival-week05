import { render, screen, fireEvent } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

import fixtures from '../fixtures';

describe('FilterableRestaurantTable', () => {
  it('카테고리 선택이 "한식"일 경우 전체 레스토랑이 렌더링', () => {
    render(<FilterableRestaurantTable restaurants={fixtures.restaurants} />);

    fireEvent.click(screen.getByRole('button', { name: '한식' }));

    expect(screen.getByText('김밥(3,500원)')).toBeInTheDocument();
    expect(screen.getByText('참치김밥(4,500원)')).toBeInTheDocument();
  });

  it('검색어 입력시 결과가 필터링 되어야 한다.', () => {
    render(<FilterableRestaurantTable restaurants={fixtures.restaurants} />);

    const inputEl = screen.getByPlaceholderText('식당 이름');

    fireEvent.change(inputEl, { target: { value: '메리' } });

    expect(screen.getByText('김밥(3,500원)')).toBeInTheDocument();
    expect(screen.getByText('참치김밥(4,500원)')).toBeInTheDocument();
  });
});
