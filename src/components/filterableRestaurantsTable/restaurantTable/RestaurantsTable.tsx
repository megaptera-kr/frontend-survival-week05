import { WithoutId } from '../../../types/common';
import { Restaurant } from '../../../types/restaurants';
import { Columns } from '../../../types/table';
import Food from '../../common/food/Food';
import SelectableList from '../../common/selectableList/SelectableList';
import Table from '../../common/table/Table';
import useCart from '../../../hooks/useCart';

interface RestaurantsTableProps {
 restaurants: Restaurant[];
}

type RestaurantColumnKey = WithoutId<Restaurant>;

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  const { handleAddCart } = useCart();

  const columns: Columns<Restaurant, RestaurantColumnKey> = [
    {
      key: 'category',
      label: '업종',
    },
    {
      key: 'name',
      label: '이름',
    },

    {
      key: 'menu',
      label: '메뉴',
    }];

  const renderColumns = (data: Restaurant, key: RestaurantColumnKey) => {
    switch (key) {
    case 'category':
    case 'name':
      return data[key];

    case 'menu':
      return (
        <SelectableList
          direct="column"
          items={data[key]}
          renderItem={(item) => (
            <Food
              name={item.name}
              price={item.price}
              onClick={handleAddCart(item)}
            />
          )}
        />
      );

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  return (
    <article>
      <h2>식당 목록창</h2>
      <Table caption="식당 목록" data={restaurants} columns={columns} renderColumns={renderColumns} />
    </article>
  );
}
