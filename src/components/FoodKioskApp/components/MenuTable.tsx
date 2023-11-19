import { Stack, Table } from '../../atoms';

import MenuTableHead from './MenuTableHead';
import MenuTableBody from './MenuTableBody';

export default function MenuTable() {
  return (
    <Stack>
      <Table>
        <MenuTableHead />
        <MenuTableBody />
      </Table>
    </Stack>
  );
}
