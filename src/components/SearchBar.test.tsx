import { fireEvent, render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['한식', '일식', '중식'];
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();
  const renderSearchBar = () => render(
    <SearchBar
      categories={categories}
      filterText=""
      setFilterText={setFilterText}
      setFilterCategory={setFilterCategory}
    />,
  );

  it('카테고리 목록과 텍스트필드를 렌더링한다.', () => {
    const { getAllByRole, getByLabelText } = renderSearchBar();

    const categoryButtons = getAllByRole('button');

    expect(getByLabelText('검색')).toBeInTheDocument();
    expect(categoryButtons).toHaveLength(categories.length + 1);
  });

  it('텍스트 필드 값이 변경되면 setFilterText 함수를 모두 호출', () => {
    const { getByLabelText } = renderSearchBar();

    const textField = getByLabelText('검색');

    fireEvent.change(textField, { target: { value: '테스트' } });

    expect(setFilterText).toHaveBeenCalledWith('테스트');
  });

  it('카테고리 버튼이 클릭될 때 setFilterCategory 함수를 호출', () => {
    const { getByRole } = renderSearchBar();

    const koreanCategoryBtn = getByRole('button', { name: '한식' });

    fireEvent.click(koreanCategoryBtn);

    expect(setFilterCategory).toHaveBeenCalledWith('한식');
  });
});
