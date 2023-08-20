import { render } from '@testing-library/react';

import OrderButton from './OrderButton';

describe('OrderButton', () => {
  it('OrderButton을 렌더링 한다.', () => {
    render((
      <OrderButton />
    ));
  });

  it('주문하기 버튼을 클릭하면 bucket을 초기화한다.', () => {
    const { getByRole } = render((
      <OrderButton />
    ));

    const orderButton = getByRole('button');

    orderButton.click();

    expect(orderButton).toHaveTextContent(/주문/);
  });
});
