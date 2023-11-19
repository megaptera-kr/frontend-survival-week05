import { Menu } from '../../types';

type Props = {
  menuItem: Menu;
  index: number;
  btnLabel?: string;
  onClick?: (payload: { menuItem: Menu; menuIndex: number }) => void;
};

function MenuItem({ menuItem, index, btnLabel = '선택', onClick }: Props) {
  const handleClick = () => onClick && onClick({ menuItem, menuIndex: index });

  return (
    <div className="column">
      {`${menuItem.name}(${menuItem.price.toLocaleString()})원`}
      {onClick && (
        <button
          data-testid="PickFoodBtn"
          name={`#${menuItem.name}`}
          onClick={handleClick}
        >
          {btnLabel}
        </button>
      )}
    </div>
  );
}

export default MenuItem;
