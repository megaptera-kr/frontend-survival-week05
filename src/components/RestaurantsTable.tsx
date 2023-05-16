import RestaurantsTableBody from './RestaurantTableBody';

export default function RestaurantsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ padding: '0 3rem' }}>식당 이름</th>
          <th style={{ padding: '0 3rem' }}>종류</th>
          <th style={{ padding: '0 3rem' }}>메뉴</th>
        </tr>
      </thead>
      <tbody>
        <RestaurantsTableBody />
      </tbody>
    </table>
  );
}
