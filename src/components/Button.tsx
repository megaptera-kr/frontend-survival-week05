import { ReactNode } from 'react';

type ButtonPropsType = {
  className: string;
  content: string | ReactNode;
};

export default function Button({ className, content }: ButtonPropsType) {
  return (
    <button className={className} type='button'>
      {content}
    </button>
  );
}
