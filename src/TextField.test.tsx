import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;
describe('TextField', () => {
  const setQuery = jest.fn();
  const query = '메리';
  const renderTextField = () => render(<TextField query={query} setQuery={setQuery} />);
  const searchLabel = (label:string) => screen.getByLabelText(label) as HTMLInputElement;

  beforeEach(() => {
    setQuery.mockClear();
  });

  context('render TextField', () => {
    it('초기 query 값을 input에 표시한다.', () => {
      renderTextField();
      const input = searchLabel('검색');
      expect(input?.value).toBe(query);
    });
  });

  context('query값이 변경되었을때', () => {
    it('setQuery 함수를 새로운 값으로 호출한다.', () => {
      renderTextField();
      const newQuery = 'new Query';
      const input = searchLabel('검색');
      fireEvent.change(input, { target: { value: newQuery } });
      expect(setQuery).toBeCalledWith(newQuery);
    });
  });
});
