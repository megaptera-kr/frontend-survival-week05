import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['음식', '의류', '가전'];
  const query = '메가';
  const setCartegory = jest.fn();
  const setQuery = jest.fn();

  const renderSearchBar = () => {
    render(<SearchBar
      query={query}
      categories={categories}
      setCartegory={setCartegory}
      setQuery={setQuery}
    />);
  };

  it('모든 카테고리 버튼이 전체를 포함한다.', () => {
    renderSearchBar();

    expect(screen.getByText('전체')).toBeInTheDocument();
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('검색 입력창이 존재한다.', () => {
    renderSearchBar();

    expect(screen.getByLabelText('검색')).toBeInTheDocument();
  });
});
