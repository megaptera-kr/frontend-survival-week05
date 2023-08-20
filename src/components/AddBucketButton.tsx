type AddBucketButtonProps = {
  name: string
  title: string
  onClick: () => void
}

export default function AddBucketButton({
  name,
  title,
  onClick,
}: AddBucketButtonProps) {
  return (
    <button
      name={name}
      type="button"
      style={{
        marginLeft: '0.5rem',
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
