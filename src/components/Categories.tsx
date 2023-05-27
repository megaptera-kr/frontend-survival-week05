type CategoriesProps = {
  category : string,
  setFilterCategory : (value:string)=>void,
}

export default function Categories(
  { category, setFilterCategory }:CategoriesProps,
) {
  function handleCategory() {
    setFilterCategory(category);
  }
  return (
    <button type="button" name={`#${category}`} onClick={handleCategory}>{category}</button>
  );
}
