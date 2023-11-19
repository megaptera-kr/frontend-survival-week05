import { TableHead, TableRow, Th } from '../../atoms';

const heads = ['식당 이름', '종류', '메뉴'];

export default function MenuTableHead() {
  return (
    <TableHead>
      <TableRow>
        {heads.map((item) => (
          <Th key={item}>{item}</Th>
        ))}
      </TableRow>
    </TableHead>
  );
}
