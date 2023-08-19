import { Menu } from '../types/restaurants';

type RestaurantTableRowProps = {
  food: Menu;
  onClickBtn: (food: Menu) => void;
}

function MenuList({ food, onClickBtn }: RestaurantTableRowProps) {
  return (
    <li key={food.id} style={{ marginBottom: '1rem' }}>
      <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
      <button
        type="button"
        name={`#${food.name}`}
        style={{ float: 'right', marginLeft: '0.5rem' }}
        onClick={() => onClickBtn(food)}
        data-testid={`#${food.name}`}
      >
        선택
      </button>
    </li>
  );
}

export default MenuList;
