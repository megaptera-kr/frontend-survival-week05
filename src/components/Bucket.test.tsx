import { render } from '@testing-library/react';

import Bucket from './Bucket';

describe('Bucket', () => {
  it('Bucket을 렌더링한다.', () => {
    const { getByText } = render((
      <Bucket />
    ));

    expect(getByText('점심 바구니')).not.toBeNull();
  });
});
