import { render } from '@testing-library/react';
import AddBucketButton from './AddBucketButton';

describe('AddBucketButton', () => {
  it('AddBucketButton 렌더링 한다.', () => {
    const { getByText } = render((
      <AddBucketButton
        name="선택"
        title="선택"
        onClick={jest.fn()}
      />
    ));

    expect(getByText('선택')).not.toBeNull();
  });

  it('AddBucketButton 클릭하면 addBucket을 호출한다.', () => {
    const addBucket = jest.fn();

    const { getByText } = render((
      <AddBucketButton
        name="선택"
        title="선택"
        onClick={addBucket}
      />
    ));

    getByText('선택').click();

    expect(addBucket).toBeCalled();
  });
});
