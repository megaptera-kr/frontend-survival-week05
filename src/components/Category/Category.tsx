interface CategoryProps { 
  category : string
  currentCategory : string
  onChangeCategory : (category : string) => void
}

const Category = ({ category, currentCategory, onChangeCategory } : CategoryProps) => {
    return (
      <li className={category === currentCategory ? 'is-active' : ''}>
        <button type="button" onClick={ () => { onChangeCategory(category) }}>{category}</button>
      </li>
    );
}
export default Category;