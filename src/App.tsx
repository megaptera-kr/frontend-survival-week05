import { useEffect, useState } from 'react';
import { useBoolean, useInterval } from 'usehooks-ts';
import { FilterableRestaurantTable, Orders, Receipt } from './components';
import ReceiptType from './types/Receipt';

const emptyReceipt = {} as ReceiptType;

export default function App() {
  const {
    value: showReceiptState,
    setTrue: showReceipt,
    setFalse: hideReceipt,
  } = useBoolean(false);
  const [receipt, setReceipt] = useState<ReceiptType>(emptyReceipt);

  useEffect(() => {
    hideReceipt();
    if (receipt.id) {
      showReceipt();
    }
  }, [receipt]);

  useInterval(() => {
    if (showReceiptState) {
      setReceipt(emptyReceipt);
      hideReceipt();
    }
  }, showReceiptState ? 5000 : null);
  return (
    <>
      <h1>푸드코트 키오스크</h1>

      <Orders setReceipt={setReceipt} />

      <FilterableRestaurantTable />

      <Receipt receipt={receipt} showReceiptState={showReceiptState} />
    </>
  );
}
