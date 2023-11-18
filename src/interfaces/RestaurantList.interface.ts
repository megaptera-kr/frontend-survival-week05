export interface MenuInterface {
  id: string
  name: string
  price: number
}

export interface RestaurantListInterface {
  id: string
  category: string
  name: string
  menu: MenuInterface[]
}
