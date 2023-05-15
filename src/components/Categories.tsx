type CategoriesProps = {
  categories: string[];
  setFilterCategory: (value: string) => void;
}

export default function Categories({ categories, setFilterCategory }: CategoriesProps) {
  return (
    <div>
      {
        ['전체', ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilterCategory(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}
