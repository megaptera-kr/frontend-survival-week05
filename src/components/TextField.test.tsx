import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  // given
  const label = 'Name';
  const text = 'Tester';

  const setText = jest.fn();

  beforeEach(() => {
    setText.mockClear();
    // jest.clearAllMocks;
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder="Input your name"
        filterText={text}
        setFilterText={setText}
      />
    ));
  }
  it('renders elements', () => {
    // when
    renderTextField();

    // then
    screen.getByLabelText(label);
    screen.getByPlaceholderText(/name/);
  });

  context('when user types text', () => {
    it('calls the change handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText('Name'), {
        target: {
          value: 'New Name',
        },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});

test('TextField', () => {
  // given
  const setFilterText = jest.fn();
  // when
  render((
    <TextField
      label="Search"
      placeholder=""
      filterText=""
      setFilterText={setFilterText}
    />
  ));

  // then
  screen.getByLabelText('Search');
});
