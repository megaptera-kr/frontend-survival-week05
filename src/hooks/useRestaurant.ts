import { useEffect, useState } from "react"
import { RestaurantListInterface } from "../interfaces/RestaurantList.interface"

const useRestaurants = (entireRestaurant :RestaurantListInterface[] ) => {
  const [restaurants, setRestaurants] = useState<RestaurantListInterface[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  
  const handleChangeCategory = (category : string) => {
    setCurrentCategory(category)
  }

  const setFilteredRestaurants = () => {
    const filteredRestaurants = entireRestaurant.filter((item) => {
      if (currentCategory === '전체') {
        return true
      } else {
        return item.category === currentCategory
      }
    }).filter((item) => {
      if (searchKeyword.trim() === '') {
        return true
      } else {
        return item.name.includes(searchKeyword)
      }
    })
    setRestaurants([...filteredRestaurants])
  }

  
  
  useEffect( () => {
    setFilteredRestaurants()
  }, [currentCategory, searchKeyword]);

  return {
    restaurants,
    setRestaurants,
    categories,
    setCategories,
    currentCategory,
    handleChangeCategory,
    searchKeyword,
    setSearchKeyword
  }
}

export default useRestaurants