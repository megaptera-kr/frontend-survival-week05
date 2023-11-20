import { render, screen } from '@testing-library/react';
import Cart from './Cart';
// cart는 밑에 테이블에서 메뉴를 선택을 했어야 보여질 수 있다.
// 이렇게 서로 다른 컴포넌트와 연관되어 있는 컴포넌트 일 경우에 어떤식으로 테스트를 짜야할까
describe('Cart', () => {
  const setReceipt = jest.fn;
  it('renders element', () => {
    render(<Cart setReceipt={setReceipt} />);

    screen.getByText('점심 바구니');
  });
});
