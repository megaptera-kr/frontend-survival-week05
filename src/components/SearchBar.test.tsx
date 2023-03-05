import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar', () => {
  // given
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  // when
  render((
    <SearchBar
      categories={['a']}
      filterText=""
      setFilterText={setFilterText}
      setFilterCategory={setFilterCategory}
    />
  ));

  // then
  screen.getByLabelText('검색');
});
