import MenuType from '../../types/MenuType';

function getTotalPrice(menu:MenuType[]):number {
  return menu.reduce((acc:number, item) => acc + item.price, 0);
}

export default getTotalPrice;
