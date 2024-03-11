import MenuType from './MenuType';

type RestaurantType = {
  id: string;
  name: string;
  category: string;
  menu: MenuType[];
};

export default RestaurantType;
