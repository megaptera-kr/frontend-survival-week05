import MenuType from '../../types/MenuType';
import MenuItem from '../MenuItem';

type MenuProps = {
 menu:MenuType[]
}

function Menu({ menu }:MenuProps) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {menu.map(({ id, name, price }) => (
        <MenuItem
          key={id}
          name={name}
          price={price}
        />
      ))}
    </ul>
  );
}

export default Menu;
