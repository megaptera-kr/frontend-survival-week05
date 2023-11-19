import { Button, Li, TableRow, Td, Ul, Text } from '../../atoms';

import useLaunchBasketHandler from '../hooks/useLaunchBasketHandler';

import { RestaurantItem } from '../types';

type MenuTableRowProps = {
  restauant: RestaurantItem;
};

export default function MenuTableRow({ restauant }: MenuTableRowProps) {
  const { addMenu } = useLaunchBasketHandler();

  const { name, category, menu } = restauant;

  return (
    <TableRow>
      <Td>{name}</Td>
      <Td>{category}</Td>
      <Td>
        <Ul>
          {menu.map(({ id, name: itemName, price }) => (
            <Li key={`${id}-${itemName}-${price}`}>
              <Text>{`${itemName}(${price.toLocaleString()}원)`}</Text>
              <Button
                type='button'
                name={`#${itemName}`}
                onClick={() => addMenu({ id, name: itemName, price })}
              >
                선택
              </Button>
            </Li>
          ))}
        </Ul>
      </Td>
    </TableRow>
  );
}
