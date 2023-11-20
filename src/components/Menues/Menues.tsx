import { MenuInterface } from '../../interfaces/RestaurantList.interface';
import Menu from '../Menu/Menu';

interface MenuesProps {
  menues: MenuInterface[]
  handleAddCart : (menu : MenuInterface) => void | undefined
}

function Menues({ menues, handleAddCart }: MenuesProps) {
  return (
    <ul className="menues">
      {
        menues.map((menu) => (
          <Menu
            key={`menu_${menu.id}`}
            menu={menu}
            onAddCart={handleAddCart}
          />
        ))
      }
    </ul>
  );
}

export default Menues;
