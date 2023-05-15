import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

describe('SearchBar', () => {
  const categories = ['전체', '중식', '한식', '일식'];
  const text = 'Test';

  const onChange = jest.fn();
  const onClick = jest.fn();

  function renderSearchBar() {
    render((
      <SearchBar
        filterText={text}
        onChange={onChange}
        onClick={onClick}
      />
    ));
  }

  it('render search label element ', () => {
    renderSearchBar();

    screen.getByLabelText('검색');
  });

  context('when it renders all categories', () => {
    beforeEach(() => {
      renderSearchBar();
    });

    it('when it renders "한식" category', () => {
      categories.forEach((category) => {
        screen.getByText(category);
      });

      screen.getByText('전체');
    });
  });
});
