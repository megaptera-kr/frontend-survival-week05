import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import fixtures from '../fixtures';

describe('<RestaurantTable />', () => {
  it('renders properly', () => {
    render(<RestaurantTable restaurants={fixtures.restaurants} />);

    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
    // FIXME: 질문) testId와 텍스트
    // 결국 이 컴포넌트의 역할은 RestaurantRow를 렌더링해주는건데,
    // 아래처럼 텍스트를 체크하면, 하위 컴포넌트인 RestaurantRow의 역할까지 테스트하는 것으로 보임.
    // => 의존성이 생기는 것으로 보임
    // 이번에는 restaurants이 필터링 되는 것을 테스트한다고 하면,
    // 하위와 중간 컴포넌트에서는 함수가 파라미터와 함께 불리는지만 테스트하고,
    // 상위 컴포넌트(해당 로직이 만들어진)에서는 함수가 적용됐을 때 바뀌면
    // 어떤 결과가 나오는지를 테스트하는 식으로 작성하려함
    // 근데 이렇게하면 결국 상위컴포넌트는 하위 컴포넌트에 의존적임
    // screen.getByTestId('RestaurantRow');
    screen.getByText(/까르보나라/);
    screen.getByText(/고르곤졸라/);
    screen.getByText(/봉골레/);
  });
});
