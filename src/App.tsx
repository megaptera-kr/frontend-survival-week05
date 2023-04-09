import { ChangeEvent, useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Cart from './components/Cart';
import filterRestaurant from './utils/filterRestaurant';
import calculateTotalPrice from './utils/calculateTotalPrice';
import Menu from './types/Menu';

export default function App() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');
  const [cart, setCart] = useState<Menu[]>([]);
  const [receipt, setReceipt] = useState();

  const filteredRestaurants = filterRestaurant({ filterText, filterCategory });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  const handleChangeCategory = (name: string) => {
    setFilterCategory(name);
  };

  const handleAddCart = (menuItem: Menu) => {
    setCart([
      ...cart,
      menuItem,
    ]);
  };

  const handleDeleteCart = (index: number) => {
    const menus = cart.filter((_, i) => i !== index);
    setCart(menus);
  };

  const totalPrice = calculateTotalPrice(cart);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>🛒 점심 바구니</h2>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        onDeleteCart={handleDeleteCart}
      />
      <SearchBar
        filterText={filterText}
        onChange={handleChangeText}
        onClick={handleChangeCategory}
      />
      <FilterableRestaurantsTable
        restaurants={filteredRestaurants}
        onAddCart={handleAddCart}
      />
      <div style={{ marginTop: 30 }}>
        <div>[🧾 영수증 나오는 곳]</div>
        <div style={{
          width: 400,
          padding: 30,
          boxSizing: 'border-box',
          border: 1,
          borderColor: 'black',
          borderStyle: 'solid',
          textAlign: 'center',
        }}
        >
          <h2 style={{ margin: 0 }}>영수증</h2>
          <h3>주문번호</h3>
          1681026197017
          <h3>주문목록</h3>
          짜장면(8,000원)
          <div>총 가격: 8,000원</div>
        </div>
      </div>
    </>
  );
}
