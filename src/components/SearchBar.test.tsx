import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

import fixtures from '../../fixtures';

jest.mock('../hooks/useCategories', () => () => fixtures.categories);

describe('SearchBar 컴포넌트', () => {
  const searchText = '';
  const searchButton = '';
  const mockSetSearchText = jest.fn();
  const mockSetCategory = jest.fn();

  beforeEach(() => {
    render(
      <SearchBar
        searchText={searchText}
        searchButton={searchButton}
        setSearchText={mockSetSearchText}
        setCategory={mockSetCategory}
      />,
    );
  });

  it('컴포넌트 렌더링', () => {
    expect(screen.getByLabelText('검색')).toBeInTheDocument();
    screen.getByText('전체');
    screen.getByText('한식');
    screen.getByText('양식');
    screen.getByText('일식');
  });
});
