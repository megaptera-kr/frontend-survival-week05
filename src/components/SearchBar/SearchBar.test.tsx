import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '.';
import { RestaurantContext, RestaurantContextValue } from '../../contexts/RestaurantContext';

const renderSearchBar = (props: RestaurantContextValue) => {
  render(<SearchBar />, {
    wrapper: ({ children }) => (
      <RestaurantContext.Provider value={props}>
        {children}
      </RestaurantContext.Provider>
    ),
  });
};

describe('<SearchBar/>', () => {
  it('SearchBar의 input에 텍스트를 입력한 경우, RestaurantContext의 searchRestaurants에 변경된 name을 넣어 실행되어야 합니다.', () => {
    // Given
    const searchRestaurants = jest.fn();
    renderSearchBar({
      restaurants: [],
      searchParams: { name: '', category: '전체' },
      searchRestaurants,
    });

    const searchInput = screen.getByLabelText('검색');

    // When
    fireEvent.change(searchInput, { target: { value: 'test' } });

    // Then
    expect(searchRestaurants).toHaveBeenCalledWith({
      name: 'test',
      category: '전체',
    });
  });
});
