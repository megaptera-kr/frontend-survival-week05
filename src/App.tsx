import { useRef, useEffect, useState } from 'react';
import useGetRestaurants from './hooks/useGetRestaurants';
import RestaurantList from './components/RestaurantList/RestaurantList';
import { ReceiptInterface, RestaurantListInterface } from './interfaces/RestaurantList.interface';
import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';
import Categories from './components/Categories/Categories';
import useRestaurants from './hooks/useRestaurant';
import useCart from './hooks/useCart';
import Receipt from './components/Receipt/Receipt';

export default function App() {
  const entireRestaurant = useRef<RestaurantListInterface[]>([]);
  const {
    restaurantList,
    setRestaurantList,
    categories,
    setCategories,
    currentCategory,
    handleChangeCategory,
    searchKeyword,
    setSearchKeyword,
  } = useRestaurants(entireRestaurant.current);
  const {
    cartMenu, totalPrice, handleAddCart, handleRegistOrder,
  } = useCart();

  const handleChangeSearchKeyword = (keyword : string) => {
    setSearchKeyword(keyword);
  };
  const initReceipt : ReceiptInterface = {
    id: '0',
    menu: [],
    totalPrice: 0,
  };
  const [receipt, setReceipt] = useState<ReceiptInterface>({ ...initReceipt });

  const handleGetReceiption = async () => {
    const response = await handleRegistOrder(
      {
        menu: cartMenu,
        totalPrice,
      },
    );
    setReceipt(response.receipt);
  };

  const handleInitReceipt = () => {
    setReceipt({ ...initReceipt });
  };

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await useGetRestaurants();
      const { restaurants } = response;
      const getCategories = restaurants.reduce((acc: string[], cur : RestaurantListInterface) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
      entireRestaurant.current = [...restaurants];
      setRestaurantList([...restaurants]);
      setCategories([...getCategories]);
    };
    getRestaurants();
  }, []);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <SearchBar searchKeyword={searchKeyword} onChangeSearchKeyword={handleChangeSearchKeyword} />
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        handleChangeCategory={handleChangeCategory}
      />
      <RestaurantList restaurants={restaurantList} handleAddCart={handleAddCart} />
      {cartMenu?.length > 0
        && (
          <Cart
            cartMenu={cartMenu}
            totalPrice={totalPrice}
            onRegistOrder={() => {
              handleGetReceiption();
            }}
          />
        )}
      <Receipt receipt={receipt} onInitReceipt={handleInitReceipt} />
    </>
  );
}
