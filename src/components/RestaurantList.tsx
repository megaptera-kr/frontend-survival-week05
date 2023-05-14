import { Restaurant } from '../types/restaurant';
import Menu from './Menu';

type Props = {
  data: Restaurant[];
}

function RestaurantList({ data }: Props) {
  return (
    <ul>
      {Array.isArray(data) && data.map((item) => (
        <li key={item.id}>
          {item.name}
          {item.category}
          <Menu data={item.menu} />
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
