import { fireEvent, screen, render } from '@testing-library/react';
import SearchField from './SearchField';

const context = describe;

describe('SearchField ', () => {
  const setFilterText = jest.fn();
  const placeholder = '식당 이름';

  function renderSearchField() {
    return render(<SearchField
      setFilterText={setFilterText}
    />);
  }

  it('component ui check', () => {
    renderSearchField();

    expect(screen.getByLabelText('검색')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  context('Input에 값을 입력하면', () => {
    it('value가 바뀌어야한다.', () => {
      renderSearchField();

      const input = screen.getByPlaceholderText(placeholder);
      fireEvent.change(input, { target: { value: '테스트' } });
      expect((input as HTMLInputElement).value).toBe('테스트');
    });
  });
});
