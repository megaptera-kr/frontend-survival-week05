import { Stack } from '../../atoms';

import Header from './Header';
import LunchBasket from './LunchBasket';
import SearchMenu from './SearchMenu';
import FilterCategory from './FilterCategory';
import MenuTable from './MenuTable';
import OutputReceipt from './OutputReceipt';

export default function FilterableMenuContainer() {
  return (
    <Stack $direction="column">
      <Header title="푸드코트 키오스크" />
      <LunchBasket title="점심 바구니" />
      <SearchMenu htmlFor="input-검색" placeholder="식당 이름" />
      <FilterCategory />
      <MenuTable />
      <OutputReceipt />
    </Stack>
  );
}
