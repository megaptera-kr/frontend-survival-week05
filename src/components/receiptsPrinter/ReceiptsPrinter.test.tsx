import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ReceiptsPrinter from './ReceipsPrinter';
import { Receipts } from '../../types/receipt';
import { receipt } from '../../../fixtures';

const context = describe;

describe('RecieptsPrinter', () => {
  function renderReceiptsPrinter(receipts?: Receipts) {
    return render(<ReceiptsPrinter receipts={receipts} />);
  }

  it('render correctly', () => {
    const component = renderer.create(<ReceiptsPrinter receipts={receipt} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  context('when dont have receipts', () => {
    it('display [영수증 나오는 곳]', () => {
      renderReceiptsPrinter();

      expect(screen.getByText('[영수증 나오는 곳]')).toBeInTheDocument();
    });
  });

  context('when have receipts', () => {
    it('display totlaPrice', () => {
      renderReceiptsPrinter(receipt);

      expect(screen.getByText('총 가격: 13,000원')).toBeInTheDocument();
    });
  });
});
