import { Li, Ul, Button } from '../../atoms';

import useChangeCategory from '../hooks/useChangeCategory';

import categories from '../constants/categories';

export default function FilterCategory() {
  const { handleClickCategory } = useChangeCategory();

  return (
    <Ul className="category-ul">
      {categories.map((item, index) => (
        <Li key={item} className="category-li">
          <Button
            type="button"
            value={item}
            onClick={handleClickCategory}
            className={`category-button-${index}`}
          >
            {item}
          </Button>
        </Li>
      ))}
    </Ul>
  );
}
