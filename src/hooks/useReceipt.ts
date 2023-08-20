import { useLocalStorage } from 'usehooks-ts';

import { Receipt } from '../types/receipt';

export default function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage<Receipt | null>('receipt', null);

  const addReceipt = (newReceipt: Receipt) => {
    setReceipt(newReceipt);
  };

  const clearReceipt = () => {
    setReceipt(null);
  };

  return {
    receipt,
    addReceipt,
    clearReceipt,
  };
}
