import { render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('검색어를 입력하면 검색어가 화면에 출력된다.', () => {
    const { container } = render((
      <SearchBar
        value=""
        setValue={jest.fn()}
      />
    ));

    const input = container.querySelector('input');

    input!.value = '마라탕';

    expect(input!.value).toBe('마라탕');
  });
});
