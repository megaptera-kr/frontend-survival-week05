import { render } from '@testing-library/react';
import Receipt from './Receipt';

describe('Receipt', () => {
  it('Receipt을 렌더링 한다.', () => {
    render((
      <Receipt />
    ));
  });
});
