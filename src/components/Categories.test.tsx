import { render } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  it('categories를 렌더링 한다.', () => {
    const { container } = render((
      <Categories
        categories={['한식', '중식', '일식']}
        setCategory={jest.fn()}
      />
    ));

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
    expect(container).toHaveTextContent('일식');
  });
});
