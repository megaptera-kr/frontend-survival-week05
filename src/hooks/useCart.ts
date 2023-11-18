import { useState } from "react"
import { MenuInterface } from "../interfaces/RestaurantList.interface"
import { BASE_URL } from "../constants/constants"

const useCart = () => {
  const [cartMenu, setCartMenu] = useState<MenuInterface[]>([])

  const handleAddCart = (menu: MenuInterface) => {
    const mergedCartMenu = [...cartMenu]
    mergedCartMenu.push(menu)
    setCartMenu([...mergedCartMenu])
  }

  const handleRegistOrder = async () => {
    console.log('cartMenu', cartMenu)
    const response =   await fetch(`${BASE_URL}/orders`, {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    // return restaurants
  }

  return {
    cartMenu,
    setCartMenu,
    handleAddCart,
    handleRegistOrder
  }  
}
export default useCart