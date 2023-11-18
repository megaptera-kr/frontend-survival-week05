import Category from "../Category/Category";

interface CategoryProps {
  categories: string[]
  currentCategory : string
  handleChangeCategory: (category: string) => void
}

const Categories = ({categories, currentCategory, handleChangeCategory} : CategoryProps) => {
  return (
    <ul className="categories">
      {categories.map((category) => (
        <Category
          key={`category_${category}`}
          category={category}
          currentCategory={currentCategory}
          onChangeCategory={handleChangeCategory}
        />
      )
      )}
    </ul>
  )
}
export default Categories;