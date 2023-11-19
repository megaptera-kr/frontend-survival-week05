import { RestaurantList } from '../../types';
import MenuItem from '../components/MenuItem';
import useFetchResturant from '../hooks/useFetchResturant';
import { useCartStorage } from '../hooks/useStorage';
import { Loading } from './Resturants';

const ResturantsList = ({
  resturantsList,
}: {
  resturantsList: RestaurantList;
}) => {
  const { handleAddCart } = useCartStorage();

  if (!resturantsList) return <Loading />;

  return (
    <div data-testid="ResturantsList" className="row">
      {resturantsList.map(row => (
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
                    onClick={handleAddCart}
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
