import { Menu } from '../../types';

type Props = {
  index: number;
  title: string;
  item: Menu;
  handleCart: (currentIndex: number) => void;
}

export default function SelectMenuItem({
  index, title, item, handleCart,
}:Props) {
  return (
    <li className="flex justify-between items-center px-2 first:mt-2 my-2 last:mb-2">
      <div className="w-[80%] text-center">
        {item.name}
        (
        {item.price.toLocaleString()}
        원)
      </div>
      <button
        className="w-[20%] bg-green-400 rounded py-2"
        data-testid={`#${index}`}
        type="button"
        onClick={() => handleCart(index)}
      >
        {title}
      </button>
    </li>
  );
}
