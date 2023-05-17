import Button from '../common/atoms/button/Button';
import Food from '../../types/food';

type CartListFoodProps = {
  selectFood: Food[];
  handleRemoveCartClick: (value: number) => void;
}

export default function CartListFood({
  selectFood, handleRemoveCartClick,
}: CartListFoodProps) {
  return (
    (!selectFood.length)
      ? <p>장바구니가 비어있습니다.</p>
      : (
        <ul style={{ width: '540px', padding: '0', listStyle: 'none' }}>
          {selectFood.map((food, index) => (
            <li
              style={{ display: 'flex', justifyContent: 'space-between' }}
              // eslint-disable-next-line react/no-array-index-key
              key={`${food.id}-${index}`}
            >
              <p>{`${food.name}(${food.price.toLocaleString('ko-kr')}원)`}</p>
              <Button
                name={`#${food.name}`}
                onClick={() => handleRemoveCartClick(index)}
              >
                삭제
              </Button>
            </li>
          ))}
        </ul>
      )
  );
}
