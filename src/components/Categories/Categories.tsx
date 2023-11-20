import { CategoryProps } from '../../interfaces/RestaurantList.interface';
import Category from '../Category/Category';

function Categories({ categories, currentCategory, handleChangeCategory } : CategoryProps) {
  return (
    <ul className="categories">
      {categories.map((category) => (
        <Category
          key={`category_${category}`}
          category={category}
          currentCategory={currentCategory}
          onChangeCategory={handleChangeCategory}
        />
      ))}
    </ul>
  );
}
export default Categories;
