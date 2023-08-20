import BucketList from './BucketList';

export default function Bucket() {
  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <BucketList />
    </div>
  );
}
