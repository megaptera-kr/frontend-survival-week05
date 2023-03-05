import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import App from './App';

test('App', async () => {
  render(<App />);

  screen.getByText('푸드코트 키오스크');

  await waitFor(() => {
    screen.getByText('메가반점');
    screen.getByText('메리김밥');
    screen.getByText('혹등고래카레');
  });

  fireEvent.click(screen.getAllByText('중식')[0]);
  await waitFor(() => {
    screen.getByText(/짜장면/);
    expect(screen.queryByText(/김밥/)).not.toBeInTheDocument();
  });

  fireEvent.click(screen.getAllByText('한식')[0]);
  await waitFor(() => {
    screen.getByText('메리김밥');
    screen.getAllByText(/김밥/);
    screen.getByText(/제육김밥/);
  });

  fireEvent.click(screen.getByText('전체'));
  fireEvent.change(screen.getByLabelText('검색'), { target: { value: '혹등' } });
  await waitFor(() => {
    screen.getByText(/기본카레/);
    screen.getByText(/소시지카레/);
    expect(screen.queryByText('메리김밥')).not.toBeInTheDocument();
  });

  fireEvent.change(screen.getByLabelText('검색'), { target: { value: ' ' } });
  await waitFor(() => {
    screen.getByText('메가반점');
    screen.getByText('메리김밥');
    screen.getByText('혹등고래카레');
  });

  screen.getByText('점심 바구니');

  screen.getByText('푸드코트 키오스크');

  fireEvent.click(screen.getByTestId('#짜장면'));
  fireEvent.click(screen.getByTestId('#짬뽕'));
  fireEvent.click(screen.getByTestId('#김밥'));
  fireEvent.click(screen.getByTestId('#기본카레'));

  fireEvent.click(screen.getByText('합계: 28,500원 주문'));
  await waitFor(() => {
    screen.getByText('주문번호');
    screen.getByText('총 가격: 28,500원');
  });

  setTimeout(() => {
    expect(screen.getByText(/영수증 나오는 곳/)).toBeVisible();
  }, 7000);
});
