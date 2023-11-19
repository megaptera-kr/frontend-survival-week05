import { MenuProps } from '../../interfaces/RestaurantList.interface';

function Menu({ menu, onAddCart } : MenuProps) {
  return (
    <li>
      <span>{menu.name}</span>
      <span>{menu.price}</span>
      {
        onAddCart ? (
          <button
            type="button"
            name={`#${menu.name}`}
            onClick={() => {
              onAddCart(menu);
            }}
          >
            추가
          </button>
        ) : ''
      }
    </li>
  );
}
export default Menu;
