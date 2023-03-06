import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('calls the change handler', () => {
    const setText = jest.fn();

    render(
      <TextField
        label="name"
        placeholder="Enter name..."
        text=""
        setText={setText}
      />,
    );

    fireEvent.change(screen.getByLabelText('name'), {
      target: {
        value: 'new name',
      },
    });

    expect(setText).toBeCalledWith('new name');
  });
});
