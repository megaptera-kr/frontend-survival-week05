import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const setFilterText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render(
      <TextField
        label="검색"
        placeholder="please write"
        filterText="메가"
        setFilterText={setFilterText}
      />,
    );
  }

  it('renders with no error', () => {
    renderTextField();
    screen.getByLabelText('검색');
    screen.getByPlaceholderText(/please/);
  });

  context('when user enters text', () => {
    beforeEach(() => {
      renderTextField();
    });
    it('calls setFilterText handler', () => {
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: 'New Name' },
      });
      expect(setFilterText).toBeCalledWith('New Name');
    });
  });
});
