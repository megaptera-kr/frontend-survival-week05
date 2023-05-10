import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header ', () => {
  const title = '푸드코트 키오스크';
  it('렌더링 되었는가?', () => {
    render(<Header title={title} />);

    screen.getByText(title);
  });
});
