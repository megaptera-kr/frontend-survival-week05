import { render, screen } from '@testing-library/react';
import RestaurantList from '.';
import { RestaurantContext, RestaurantContextValue } from '../../contexts/RestaurantContext';
import restaurants from '../../../fixtures/restaurants';
import { Restaurant } from '../../types/restaurant';

const renderRestaurantList = (props: RestaurantContextValue) => {
  render(<RestaurantList />, {
    wrapper: ({ children }) => (
      <RestaurantContext.Provider value={props}>
        {children}
      </RestaurantContext.Provider>
    ),
  });
};

describe('<RestaurantList/>', () => {
  it('RestaurantContext에 restaurants이 있는 경우, 레스토랑 목록을 화면에 렌더링 해야 합니다.', () => {
    // Given, When
    renderRestaurantList({
      restaurants: restaurants as Restaurant[],
      searchParams: { name: '', category: '전체' },
    });

    const restaurant1 = screen.getByText(/메가반점/i);

    // Then
    expect(restaurant1).toBeInTheDocument();
  });

  it('RestaurantContext에 restaurants이 없는 경우, 레스토랑의 구분 카테고리만 화면에 렌더링 해야 합니다.', () => {
    // Given, When
    render(<RestaurantList />);

    const nameSection = screen.getByText(/식당 이름/i);
    const restaurant1 = screen.queryByText(/메가반점/i);

    // Then
    expect(nameSection).toBeInTheDocument();
    expect(restaurant1).not.toBeInTheDocument();
  });
});
