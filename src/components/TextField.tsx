export default function TextField() {
  return (
    <>
      <label htmlFor="restaurantName" style={{ marginRight: 10 }}>검색</label>
      <input id="restaurantName" placeholder="식당 이름" />
    </>
  );
}
