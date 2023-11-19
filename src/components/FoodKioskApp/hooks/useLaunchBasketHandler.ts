import { useMemo } from 'react';

import useFookKioskStore from './useFoodKioskStore';
import useFoodKioskDispatchStore from './useFoodKioskDispatchStore';

import { MenuItem, ReceiptResponse } from '../types';

import { postOrderURL } from '../../../api';

export default function useLaunchBasketHandler() {
  const { addedMenus, receipt } = useFookKioskStore();
  const dispatch = useFoodKioskDispatchStore();

  const totalPrice = useMemo(
    () => addedMenus.reduce((acc, cur) => acc + (cur.price || 0), 0),
    [addedMenus]
  );

  const isExistedReceipt = useMemo(() => {
    const { id, menu, totalPrice: price } = receipt;

    return id && menu && !!price;
  }, [receipt]);

  const disabled = addedMenus.length === 0;

  const addMenu = (item: MenuItem) => {
    dispatch?.({ type: 'add_menu', payload: item });
  };

  const deleteMenu = (idx: number) => {
    dispatch?.({ type: 'delete_menu', payload: idx });
  };

  const orderMenus = async () => {
    if (addedMenus.length > 0) {
      const item = {
        id: new Date().toISOString(),
        menu: addedMenus,
        totalPrice,
      };

      const response = await fetch(postOrderURL, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        method: 'post',
        body: JSON.stringify(item),
      });
      const data = (await response.json()) as ReceiptResponse;

      const { receipt: receiptData } = data;

      dispatch?.({ type: 'get_receipt', payload: receiptData });

      dispatch?.({ type: 'reset_menu', payload: [] });

      setTimeout(() => {
        console.log('실행');
        dispatch?.({ type: 'delete_receipt', payload: {} });
      }, 5000);
    }
  };

  return {
    disabled,
    addedMenus,
    totalPrice,
    receipt,
    isExistedReceipt,
    addMenu,
    deleteMenu,
    orderMenus,
  };
}
