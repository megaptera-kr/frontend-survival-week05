import { useRef, useEffect, useState } from 'react';
import useGetRestaurants from './hooks/useGetRestaurants';
import RestaurantList from './components/RestaurantList/RestaurantList';
import { MenuInterface, RestaurantListInterface } from './interfaces/RestaurantList.interface';
import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';
import Categories from './components/Categories/Categories';
import useRestaurants from './hooks/useRestaurant';
import useCart from './hooks/useCart';

export default function App() {
  const entireRestaurant = useRef<RestaurantListInterface[]>([])
  const {cartMenu, handleAddCart, handleRegistOrder} = useCart()
  const {
    restaurants, 
    setRestaurants, 
    categories, 
    setCategories, 
    currentCategory, 
    handleChangeCategory,
    searchKeyword,
    setSearchKeyword
  } = useRestaurants(entireRestaurant.current)


  const handleChangeSearchKeyword = (keyword : string) => {
    setSearchKeyword(keyword)
  }

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await useGetRestaurants()
      const {restaurants} = response
      const getCategories = restaurants.reduce((acc: string[], cur : RestaurantListInterface) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
      entireRestaurant.current = [...restaurants]
      setRestaurants([...restaurants])
      setCategories([...getCategories])
    }
    getRestaurants()
  }, [])

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <SearchBar searchKeyword={searchKeyword} onChangeSearchKeyword={handleChangeSearchKeyword}/>
      <Categories categories={categories} currentCategory={currentCategory} handleChangeCategory={handleChangeCategory}/>
      <RestaurantList restaurants={restaurants} handleAddCart={handleAddCart}/>
      {cartMenu?.length > 0 &&
        <Cart cartMenu={cartMenu} onRegistOrder={handleRegistOrder}/>
      }
    </>
  );
}

