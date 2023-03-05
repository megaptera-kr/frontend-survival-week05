import { render, screen } from "@testing-library/react"
import Menu from "./Menu"

test('Menu', () => {
  // given
  const menu = [{
    id: '1',
    name: '딸기',
    price: 123
  }]
  // when
  render((
    <Menu
      menu = {menu}
    />
  ));

  // then
  screen.getByText('선택');
})