import Category from '../../types/Category';

type CategoryButtonProps = {
  category:Category;
  selectedCategory:Category;
  setSelectedCategory:(category:Category) => void
}

function CategoryButton({
  category,
  selectedCategory,
  setSelectedCategory,
}:CategoryButtonProps) {
  const handleClick = () => {
    setSelectedCategory(category);
  };
  return (
    <button
      type="button"
      name={`#${category}`}
      style={{
        marginRight: '1rem',
        color: selectedCategory === category ? 'red' : '',
      }}
      onClick={handleClick}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
