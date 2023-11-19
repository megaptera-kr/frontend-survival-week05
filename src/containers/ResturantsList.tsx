import MenuItem from '../components/MenuItem';
import { useFetchResturant } from '../hooks/useFetchResturant';
import { Loading } from './Resturants';

const ResturantsList = () => {
  const { data, error } = useFetchResturant();

  if (!data) return <Loading />;

  return (
    <div data-testid="ResturantsList" className="row">
      {data.map(row => (
        <ul
          data-testid={`ResturantsItem${row.id}`}
          className="column"
          key={row.id}
        >
          <li>{row.name}</li>
          <li>{row.category}</li>
          <li>
            <ul className="row lv2">
              {row.menu.map((menuItem, index) => (
                <li key={index}>
                  <MenuItem
                    menuItem={menuItem}
                    index={index}
                    onClick={() => {}}
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ResturantsList;
