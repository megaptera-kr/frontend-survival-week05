import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';

import App from './App';

describe('Menu Filtering Scenario', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('render FoodKiosk', async () => {
    await waitFor(() => {
      screen.getByText('푸드코트 키오스크');
      expect(screen.getByText('메가반점')).toBeInTheDocument();
      expect(screen.getByText('메리김밥')).toBeInTheDocument();
      expect(screen.getByText('혹등고래카레')).toBeInTheDocument();
    });
  });

  it('click category 중식', async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: '중식' }));
      expect(screen.getByText('짜장면(8,000원)')).toBeInTheDocument();
    });
  });

  it('click category 한식', async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: '한식' }));
      expect(screen.getByText('메리김밥')).toBeInTheDocument();
      expect(screen.getByText('김밥(3,500원)')).toBeInTheDocument();
      expect(screen.getByText('제육김밥(5,000원)')).toBeInTheDocument();
    });
  });

  it('click category 전체 and input change "혹등"', async () => {
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: '전체' }));
      const input = screen.getByPlaceholderText(
        '식당 이름',
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: '혹등' } });

      expect(screen.getByText('기본카레(9,000원)')).toBeInTheDocument();
      expect(screen.getByText('소시지카레(13,000원)')).toBeInTheDocument();
    });
  });

  it('input change ""', async () => {
    await waitFor(() => {
      const input = screen.getByPlaceholderText(
        '식당 이름',
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: '' } });

      expect(screen.getByText('메가반점')).toBeInTheDocument();
      expect(screen.getByText('메리김밥')).toBeInTheDocument();
      expect(screen.getByText('혹등고래카레')).toBeInTheDocument();
    });
  });
});
