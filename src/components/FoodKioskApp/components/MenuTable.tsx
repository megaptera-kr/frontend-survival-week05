import { Table } from '../../atoms';

import MenuTableHead from './MenuTableHead';
import MenuTableBody from './MenuTableBody';

export default function MenuTable() {
  return (
    <Table>
      <MenuTableHead />
      <MenuTableBody />
    </Table>
  );
}
