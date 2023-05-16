import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import useFetchRestaurants from '../../hooks/__mocks__/useFetchRestaurants';
import FilterableRestaurant from './filterable/FilterableRestaurant';
import RestaurantsTable from './RestaurantsTable';

import RestaurantsContext from '../../hooks/context/RestaurantsContext';

const context = describe;

describe('FilterableRestaurantTable ', () => {
  const filterCategories = ['전체', '중식', '일식'];
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  const restaurants = useFetchRestaurants();

  function renderFilterableRestaurantTable() {
    return render(
      <div>
        <RestaurantsContext.Provider value={restaurants}>
          <FilterableRestaurant
            filterCategories={filterCategories}
            setFilterText={setFilterText}
            setFilterCategory={setFilterCategory}
          />
          <RestaurantsTable />
        </RestaurantsContext.Provider>
      </div>,
    );
  }

  it('렌더링 엘리먼트 확인', () => {
    renderFilterableRestaurantTable();

    expect(screen.getByLabelText('검색')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('식당 이름')).toBeInTheDocument();
  });

  context('context 데이터가 하위 컴포넌트로 넘어가면', () => {
    it('context data 확인', () => {
      renderFilterableRestaurantTable();

      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
    });
  });

  // context('카테고리 버튼 클릭 시 필터 처리하는데', () => {
  //   it('중식 필터 버튼을 클릭하였으면', () => {
  //     renderFilterableRestaurantTable();

  //     const filterButton = screen.getByTestId('testButton-중식');
  //     fireEvent.click(filterButton);
  //     expect(screen.getByText(/혹등고래카레/)).toBeInTheDocument();
  //   });
  // });
});
