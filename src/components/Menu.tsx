import { Menu } from '../types/restaurant';

type Props = {
  data: Menu[];
}

function Menu({ data }: Props) {
  return (
    <ul>
      {data && data.map((item: Menu, index) => {
        const key = `${item.id}-${index}`;

        return (
          <li key={key}>
            {item.name}
            {item.price}
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
