import Cart from './components/cart/Cart';
import FilterableRestaurantsTable from './components/filterableRestaurantsTable/FilterableRestaurantsTable';
import ReceiptsPrinter from './components/receiptsPrinter/ReceipsPrinter';
import useReceipts from './hooks/useReceipts';

export default function App() {
  const { receipts, createReceipts } = useReceipts();

  return (
    <main>
      <h1>푸드코트 키오스크</h1>
      <section style={{ display: 'flex' }}>
        <FilterableRestaurantsTable />
        <Cart createReceipts={createReceipts} />
        <ReceiptsPrinter receipts={receipts} />
      </section>
    </main>
  );
}
