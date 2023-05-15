import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

import extractCategories from '../../utils/extractCategories';

import restaurants from '../../../fixtures/restaurants';

const context = describe;
const categories = extractCategories(restaurants);

describe('FilterableRestaurantTable', () => {
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  const text = '';

  function renderSearchBar() {
    // given
    render((
      <SearchBar
        categories={categories}
        filterText={text}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  context('restaurants 데이터가 보여지기 전', () => {
    it('빈 값을 가진 검색 바가 보인다.', () => {
      // given
      renderSearchBar();

      // then
      screen.getByPlaceholderText('식당 이름');
    });
  });
});
