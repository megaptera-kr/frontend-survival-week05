import { fireEvent, render } from '@testing-library/react';

import OrderButton from './OrderButton';

const handleClick = jest.fn();

describe('OrderButton', () => {
  it('OrderButton을 렌더링 한다.', () => {
    const { getByRole } = render((
      <OrderButton
        text="주문하기"
        onClick={handleClick}
      />
    ));

    const orderButton = getByRole('button');

    expect(orderButton).toHaveTextContent(/주문/);
  });

  it('주문하기 버튼을 클릭하면 addReceipt을 호출한다.', () => {
    const { getByRole } = render((
      <OrderButton
        text="주문하기"
        onClick={handleClick}
      />
    ));

    const orderButton = getByRole('button');

    fireEvent.click(orderButton);

    expect(handleClick).toBeCalled();
  });
});
