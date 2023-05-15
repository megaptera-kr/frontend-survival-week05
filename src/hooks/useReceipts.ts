import { useState } from 'react';
import { Receipts } from '../types/receipt';

import useTimeout from './useTimeout';

interface useReceipts {
  receipts: Receipts;
  createReceipts: (receipts: Receipts) => void;
}

export default function useReceipts() {
  const [receipts, setReceipts] = useState<Receipts | null>(null);

  const createReceipts = (_receipts: Receipts) => {
    setReceipts(_receipts);
  };

  useTimeout(() => setReceipts(null), 5000, receipts);

  return { receipts, createReceipts };
}
