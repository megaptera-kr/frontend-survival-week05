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

export interface CartMenuInterface {
  id: string
  name: string
  price: number
}

export interface ReceiptInterface {
  id: string
  menu: MenuInterface[]
  totalPrice: number
}

// Props Interface
export interface MenuProps {
  menu : MenuInterface
  onAddCart ?: (menu : MenuInterface) => void | undefined
}

export interface CartProps {
  cartMenu: MenuInterface[]
  onRegistOrder : () => void
}

export interface SearchBarProps {
  searchKeyword: string
  onChangeSearchKeyword : (keyword : string) => void
}

export interface RestaurantListProps {
  restaurants : RestaurantListInterface[]
  handleAddCart : (menu : MenuInterface) => void
}

export interface RestaurantItemProps {
  restaurant: RestaurantListInterface
  handleAddCart : (menu : MenuInterface) => void | undefined
}

export interface CategoryProps {
  categories: string[]
  currentCategory : string
  handleChangeCategory: (category: string) => void
}
