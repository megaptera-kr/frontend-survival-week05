import { render, screen, fireEvent } from '@testing-library/react';
import CategoryBar from '.';
import { RestaurantContext } from '../../contexts/RestaurantContext';

describe('<CategoryBar/>', () => {
  it('CategoryBar의 버튼을 클릭한 경우, RestaurantContext의 searchRestaurants에 변경된 category값을 넣어 실행되어야 합니다.', () => {
    // Given
    const searchRestaurants = jest.fn();

    render(<CategoryBar />, {
      wrapper: ({ children }) => (
        <RestaurantContext.Provider value={{
          restaurants: [],
          searchParams: { name: '', category: '전체' },
          searchRestaurants,
        }}
        >
          {children}
        </RestaurantContext.Provider>
      ),
    });

    const koreanFoodButton = screen.getByRole('button', { name: '한식' });

    // When
    fireEvent.click(koreanFoodButton);

    // Then
    expect(searchRestaurants).toHaveBeenCalledWith({
      name: '',
      category: '한식',
    });
  });
});
