import Receipt from '../../types/receipt';
import ReceiptDetail from './ReceiptDetail';

type ReceiptPrintProps = {
  receipt: Receipt
}

export default function ReceiptPrint({ receipt }:ReceiptPrintProps) {
  return (
    <div>
      <p>[영수증 나오는 곳]</p>
      { receipt.id
        && (
          <ReceiptDetail receipt={receipt} />
        )}
    </div>
  );
}
