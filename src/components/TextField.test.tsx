import { fireEvent, screen, render } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = 'Name';
  const text = 'Test';

  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    render((
      <TextField
        label={label}
        text={text}
        onChange={onChange}
      />
    ));
  }

  function inputText(value: string) {
    fireEvent.change(screen.getByLabelText(label), {
      target: { value },
    });
  }

  it('renders elements', () => {
    renderTextField();

    screen.getByLabelText(label);
    screen.getByDisplayValue(text);
  });

  context('when users enters name', () => {
    beforeEach(() => {
      renderTextField();
    });

    it('calls “onChange” handler', () => {
      inputText('New Name');
      expect(onChange).toBeCalled();
    });
  });
});
