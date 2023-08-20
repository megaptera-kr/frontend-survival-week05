import useBucketStorage from '../hooks/useBucketStorage';

import AddBucketButton from './AddBucketButton';
import MenuListItem from './MenuListItem';

export default function BucketList() {
  const { bucket, removeMenu } = useBucketStorage();

  return (
    <ul>
      {bucket.map((bucketItem, index) => {
        const keyId = `${bucketItem.id}-${index}`;
        return (
          <MenuListItem
            key={keyId}
            menu={bucketItem}
          >
            <AddBucketButton
              name={`#${bucketItem.name}`}
              title="취소"
              onClick={() => removeMenu(index)}
            />
          </MenuListItem>
        );
      })}
    </ul>
  );
}
