import { fireEvent, render, screen } from '@testing-library/react';

import BucketList from './BucketList';
import foods from '../../fixtures/foods';

const removeMenu = jest.fn();

jest.mock('../hooks/useBucketStorage', () => () => ({
  bucket: foods,
  removeMenu,
}));

describe('BucketList', () => {
  it('BucketList를 렌더링 한다.', () => {
    render((
      <BucketList
        bucketList={foods}
        handleClickRemove={removeMenu}
      />
    ));
    const bucketList = screen.getByRole('list');
    expect(bucketList).toBeInTheDocument();
    expect(bucketList.children).toHaveLength(foods.length);
  });

  it('취소 버튼을 클릭하면 removeMenu를 호출한다.', () => {
    render((
      <BucketList
        bucketList={foods}
        handleClickRemove={removeMenu}
      />
    ));
    const [cancelButton, ...rest] = screen.getAllByText('취소');
    fireEvent.click(cancelButton);
    expect(removeMenu).toHaveBeenCalled();
  });
});
