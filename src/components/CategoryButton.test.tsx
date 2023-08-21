import { render } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('CategoryButton', () => {
  it('category를 렌더링 한다.', () => {
    const { container } = render((
      <CategoryButton category="한식" setCategory={jest.fn()} />
    ));

    expect(container).toHaveTextContent('한식');
  });

  it('category를 클릭하면 setCategory를 호출한다.', () => {
    const setCategory = jest.fn();

    const { getByText } = render((
      <CategoryButton category="한식" setCategory={setCategory} />
    ));

    getByText('한식').click();

    expect(setCategory).toBeCalledWith('한식');
  });
});
