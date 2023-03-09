import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../fixtures';
import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('<FilterableRestaurantTable />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SearchBar and RestaurantTable', () => {
    render(<FilterableRestaurantTable restaurants={fixtures.restaurants} />);

    expect(screen.getByLabelText('검색')).toBeTruthy();
    expect(screen.getByText('종류')).toBeTruthy();
  });

  it('filters restaurants', () => {
    render(<FilterableRestaurantTable restaurants={fixtures.restaurants} />);

    // TODO: 찾아보기
    // queryByText와 getByText 사용시 차이 : queryBy는 없어도 에러 X
    // toBeInTheDocument와 toBeTruthy 사용시차이
    fireEvent.click(screen.getByRole('button', { name: '중식' }));
    expect(screen.queryByText(/참치김밥/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '전체' }));
    expect(screen.queryByText(/참치김밥/)).toBeInTheDocument();
    expect(screen.queryByText(/짜장면/)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('식당 이름'), {
      target: { value: '메리' },
    });
    expect(screen.queryByText(/짜장면/)).not.toBeInTheDocument();
  });
});
