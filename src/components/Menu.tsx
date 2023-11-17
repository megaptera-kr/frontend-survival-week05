function Menu({ menues }: { menues: any[] }) {
  return (
    <>
      {
        menues.map((menu) => (
          <div key={menu.id}>
            {menu.name}
            {menu.price}
            <button type="button">담기</button>
          </div>
        ))
      }
    </>
  );
}

export default Menu;
