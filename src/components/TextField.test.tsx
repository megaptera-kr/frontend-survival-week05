import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = 'Name';
  const placeholder = 'Search...';
  const filterText = '';
  const setFilterText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('renders elements', () => {
    renderTextField();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(placeholder);
  });

  context('when user enters name', () => {
    it('calls "setFilterText" handler', () => {
      renderTextField();
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });
      expect(setFilterText).toBeCalledWith('New Name');
    });
  });
});
