import Category from '../../types/Category';
import CategoryButton from '../CategoryButton';

type CategoryFilterProps = {
  categories: Category[]
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
}

function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}

export default CategoryFilter;
