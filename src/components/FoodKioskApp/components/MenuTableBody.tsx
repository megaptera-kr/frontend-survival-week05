import { TableBody } from '../../atoms';

import FilterableMenuTableRow from './MenuTableRow';

import useFilteredMenu from '../hooks/useFilteredMenu';

export default function MenuTableBody() {
  const { restaurants } = useFilteredMenu();

  return (
    <TableBody>
      {restaurants?.map((restaurant) => (
        <FilterableMenuTableRow key={restaurant.id} restauant={restaurant} />
      ))}
    </TableBody>
  );
}
