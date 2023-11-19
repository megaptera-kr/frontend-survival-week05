import { render, screen } from '@testing-library/react';
import MenuRow from './MenuRow';

// menu row는 handleclick을 props로 전달 받는 것이 아니라 컴포넌트에서 생성을 해서 사용을 하고 있다.
// 이럴 경우 fireEvent를 활용하여 click 이벤트가 발생했는지 확인을 어떻게 하지?
// localstorage에 저장되었다는것은 브라우저가 아니라서 확인하지 못하지 않을까?
describe('MenuRow', () => {
  it('renders element', () => {
    render(<MenuRow menu={{
      id: 'FOOD_01',
      name: '짜장면',
      price: 8_000,
    }}
    />);

    screen.getByText('짜장면');
    screen.getByText('8,000원');
  });
});
