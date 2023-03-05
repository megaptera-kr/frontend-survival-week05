import { render, screen, waitFor } from "@testing-library/react"
import fixtures from "../fixtures";
import ReceiptPrinter from "./ReceiptPrinter"

test('ReceiptPrinter', async () => {
  // given
  const receipt = {
    id: '1',
    menu: fixtures.restaurants[0].menu,
    totalPrice: 1000,
  };
  // when
  render((
    <ReceiptPrinter
      receipt = {receipt}
    />
  ));

  // then
  await waitFor(() => {
		screen.getByText(/1,000/);
	});
})