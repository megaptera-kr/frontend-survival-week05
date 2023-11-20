import { render, waitFor, screen } from '@testing-library/react';
import useGetRestaurants from './hooks/useGetRestaurants';
import App from './App';

const context = describe;
describe('페이지를 확인한다.', () => {
  render(<App />);
  useGetRestaurants();
  context('제목이 상단에 제공된다.', () => {
    it('제목은 푸드코트 키오스크', async () => {
      await waitFor(() => {
        screen.findByText('푸드코트 키오스크');
      });
    });
  });

  context('푸드코드 키오스크에서 메뉴가 나타난다.', () => {
    it('메뉴 중에는 짜장면이 있다.', async () => {
      await waitFor(() => {
        screen.findByText('짜장면');
      });
    });
  });
});
