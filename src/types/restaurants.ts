export type RestaurantMenuItem = {
  id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: RestaurantMenuItem[];
};
