import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('App 은 장바구니, 식당 목록, 영수증 컴포넌트를 렌더링 한다.', () => {
    render(<App />);
    const element = screen.getByTestId('Restaurants');
    expect(element).toBeInTheDocument();
  });
});
