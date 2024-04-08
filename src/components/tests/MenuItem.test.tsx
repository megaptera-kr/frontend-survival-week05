import { render } from '@testing-library/react';
import MenuItem from '../MenuItem';

describe('MenuItem Component', () => {
  const food = {
    id: '1',
    name: '짜장면',
    price: 8000,
  };

  it('이름과 가격을 렌더링한다', () => {
    const { getByText } = render(<MenuItem food={food} />);
    const nameElement = getByText(/짜장면/);
    const priceElement = getByText(/8,000/);

    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
