import Category from './Category';
import MenuType from './MenuType';

type Restaurant = {
  id:string;
  category:Category
  name:string;
  menu:MenuType[]
}

export default Restaurant;
