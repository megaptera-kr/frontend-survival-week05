import { useLocalStorage } from 'usehooks-ts';

import ReceiptType from '../types/ReceiptType';

const emptyReceipt = {} as ReceiptType;

function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const handleAddReceipt = (v: ReceiptType) => setReceipt(v);
  const handleRemoveAllReceipt = () => setReceipt(emptyReceipt);

  return { receipt, handleAddReceipt, handleRemoveAllReceipt };
}

export default useReceipt;
