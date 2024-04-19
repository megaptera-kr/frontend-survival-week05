import { convertKRW } from '../../utils';

type MenuItemProps = {
  name:string;
  price:number
}

function MenuItem({ name, price }:MenuItemProps) {
  return (
    <li>
      <span>
        {`${name}(${convertKRW(price)})`}
      </span>
      <button type="button">선택</button>
    </li>
  );
}

export default MenuItem;
