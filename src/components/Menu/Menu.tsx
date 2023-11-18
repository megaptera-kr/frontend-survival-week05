import { MenuInterface } from "../../interfaces/RestaurantList.interface"

interface MenuProps {
  menu : MenuInterface
  onAddCart ?: (menu : MenuInterface) => void
}
const Menu = ({menu, onAddCart} : MenuProps) => {
  return(
    <li>
      <span>{menu.name}</span>
      <span>{menu.price}</span>
      {
        onAddCart ? <button type="button" onClick={() =>
          {
            onAddCart(menu)
          } 
        }>추가</button> : ''
      }
    </li>
  )
}
export default Menu;