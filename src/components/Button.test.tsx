import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button ', () => {
  const buttonTitle = '전체';
  const onClick = jest.fn();
  const buttonType = 'button';

  it('renders Button', async () => {
    render(<Button
      type={buttonType}
      title={buttonTitle}
      buttonStyle={{ marginLeft: '.5rem' }}
      name=""
      onClick={onClick}
    />);

    const title = screen.getByText(/전체/);
    expect(title).toBeInTheDocument();
  });
});
