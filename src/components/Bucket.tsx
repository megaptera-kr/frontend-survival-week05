import BucketList from './BucketList';
import OrderButton from './OrderButton';

export default function Bucket() {
  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <BucketList />
      <OrderButton />
    </div>
  );
}
