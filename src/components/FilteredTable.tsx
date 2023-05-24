import Restaurant from '../type/Restaurants';
import Menu from './Menu';

type FilteredTableProps = {
  restaurants : Restaurant[]
}

export default function FilteredTable({ restaurants }:FilteredTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
            restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.category}</td>
                <td>
                  {
                    (restaurant.menu).map((menu) => (
                      <Menu key={menu.id} menu={menu} />
                    ))
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
