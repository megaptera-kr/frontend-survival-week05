import { RestaurantMenuItem } from '../types/restaurants';

import AddBucketButton from './AddBucketButton';
import MenuListItem from './MenuListItem';

type BucketListProps = {
  bucketList: RestaurantMenuItem[];
  handleClickRemove: (index: number) => void;
}

export default function BucketList({ bucketList, handleClickRemove }: BucketListProps) {
  return (
    <ul>
      {bucketList.map((bucketItem, index) => {
        const keyId = `${bucketItem.id}-${index}`;
        return (
          <MenuListItem
            key={keyId}
            menu={bucketItem}
          >
            <AddBucketButton
              name={`#${bucketItem.name}`}
              title="취소"
              onClick={() => handleClickRemove(index)}
            />
          </MenuListItem>
        );
      })}
    </ul>
  );
}
