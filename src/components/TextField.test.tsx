import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  // given
  const filterText = '짜';
  const setFilterText = jest.fn();

  context('filterText가 넘어왔을때', () => {
    it('filterText가 짜라면?', () => {
      render((
        <TextField
          label="검색"
          placeholder="식당 이름"
          filterText={filterText}
          setFilterText={setFilterText}
        />
      ));
      expect(screen.getByText('검색')).toBeInTheDocument();
      fireEvent.change(screen.getByLabelText('검색'));
    });
  });
});
