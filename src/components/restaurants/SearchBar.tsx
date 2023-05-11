import TextFiled from './TextFiled';
import CategoryButtonGroup from './CategoryButtonGroup';

type Props = {
  text: string;
  setText: (value: string) => void;
  setSelectCategory: (name: string) => void;
}
export default function SearchBar({
  text,
  setText,
  setSelectCategory,
}:Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <TextFiled
        label="검색"
        placeholder="식당 이름"
        text={text}
        setText={setText}
      />
      <CategoryButtonGroup
        setSelectCategory={setSelectCategory}
      />
    </div>
  );
}
