export interface RestaurantList {
  id: string
  category: string
  name: string
  menu: any
}

export interface RestaurantListProps {
  restaurants: RestaurantList[]
}
