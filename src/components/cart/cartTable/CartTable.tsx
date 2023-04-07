import { Food } from '../../../types/food';
import Table from '../../common/table/Table';
import { Columns } from '../../../types/table';

interface CartTableProps {
  cartItems: Food[];
  handleRemoveCart: (id: string) => () => void;
}

export default function CartTable({ cartItems, handleRemoveCart }: CartTableProps) {
  const columns: Columns<Food, keyof Food> = [
    {
      key: 'name',
      label: '음식 명',
    },
    {
      key: 'price',
      label: '음식 가격',
    },
    {
      key: 'id',
      label: '제거하기',
    },
  ];

  const renderColumns = (data: Food, key: keyof Food) => {
    switch (key) {
    case 'name':
    case 'price':
      return data[key];

    case 'id':
      return (
        <button type="button" onClick={handleRemoveCart(data.id)}>
          {`${data.name}제거`}
        </button>
      );

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  return <Table caption="점심 바구니" data={cartItems} columns={columns} renderColumns={renderColumns} />;
}
