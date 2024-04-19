import Category from '../../types/Category';

type CategoryButtonProps = {
  category:Category;
}

function CategoryButton({ category }:CategoryButtonProps) {
  return (
    <button
      type="button"
      name={`#${category}`}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
