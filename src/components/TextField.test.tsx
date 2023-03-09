import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

let label: string;
let placeholder: string;
let filterText: string;
const setFilterText = jest.fn();

describe('TextField', () => {
  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder={placeholder}
        filterText={filterText}
        setFilterText={setFilterText}
      />
    ));
  }

  context('페이지에 접속하면', () => {
    beforeEach(() => {
      label = '검색';
      placeholder = '검색어를 입력하세요';
      filterText = '';
    });

    it('TextField가 렌더된다', () => {
      renderTextField();

      screen.getByPlaceholderText('검색어를 입력하세요');
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '초밥' },
      });

      expect(setFilterText).toBeCalledWith('초밥');
    });
  });
});
