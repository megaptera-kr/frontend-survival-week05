import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import Restaurant from '../components/Restaurant';

// jest.mock('../hooks/useFetchRestaurants.ts');

const context = describe;

describe('Restaurant', () => {
  it('renders restaurants', async () => {
    render(<Restaurant />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });

  /* 상품 주문 API 요청을 날리는 컴포넌트랑, 받은 데이터로 영수증을 보여주는 컴포넌트가 다른데..
    두 컴포넌트를 호출하는 Restaurant 최상위 컴포넌트에서 테스트를 수행하는게 맞나..?
  */
  context('주문 버튼을 눌렀을 때', () => {
    it('receipt 데이터를 받는다', async () => {
      render(<Restaurant />);
      fireEvent.click(screen.getByText(/원 주문/));
      await waitFor(() => {
        expect(screen.queryByText(/짜장면/)).toBeInTheDocument();
      });
    });
  });
});
