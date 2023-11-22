type CategoryType = {
  category: string;
  setFilterCategory: (text: string) => void;
}

export default function Category({
  category, setFilterCategory,
}: CategoryType) {
  return (
    <li
      style={{
        marginRight: '1rem',
      }}
    >
      <button
        type="button"
        onClick={() => setFilterCategory(category)}
      >
        {category}
      </button>
    </li>
  );
}
