type CategoryButtonProps = {
  category: string
  setCategory: (text: string) => void;
}

function CategoryButton({
  category, setCategory,
}: CategoryButtonProps) {
  return (
    <li style={{ marginRight: '1rem' }}>
      <button
        type="button"
        onClick={() => setCategory(category)}
      >
        {category}
      </button>
    </li>
  );
}

export default CategoryButton;
