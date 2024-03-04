import { ReactNode } from 'react';

type ButtonPropsType = {
  className: string;
  content: string | ReactNode;
  setButton: (v: string) => void;
};

export default function Button({
  className,
  content,
  setButton,
}: ButtonPropsType) {
  const handleClick = () => {
    if (typeof content === 'string') {
      setButton(content);
    }
  };

  return (
    <button className={className} type='button' onClick={handleClick}>
      {content}
    </button>
  );
}
