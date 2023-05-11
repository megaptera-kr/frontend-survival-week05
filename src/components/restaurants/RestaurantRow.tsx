import { Menu } from '../../types';
import MenuItem from './MenuItem';

type Props = {
  name: string;
  category: string;
  menu: Menu[];
}

const commonStyle = 'border-2 border-green-500 text-center';

export default function RestaurantRow({
  name, category, menu,
}:Props) {
  return (
    <tr>
      <td className={commonStyle}>{name}</td>
      <td className={commonStyle}>{category}</td>
      <td className={commonStyle}>
        <ul>
          {menu.map((item) => (
            <MenuItem
              key={item.id}
              title="선택"
              item={item}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
