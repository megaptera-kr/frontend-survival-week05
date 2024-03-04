type ButtonPropsType = {
  className: string;
  text: string;
};

export default function Button({ className, text }: ButtonPropsType) {
  return (
    <button className={className} type='button'>
      {text}
    </button>
  );
}
