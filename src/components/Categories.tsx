type CategoriesProps = {
  categories: string[];
  setFilterCategory: (text: string) => void;
};

export default function Categories({
  categories,
  setFilterCategory,
}: CategoriesProps) {
  return (
    <ul>
      {['전체', ...categories].map((category) => (
        <li key={category}>
          <button type="button" onClick={() => setFilterCategory(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
