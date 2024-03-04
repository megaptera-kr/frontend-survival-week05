import TextField from './TextField';

type SearchFieldProps = {
  searchText: string;
  setSearchText: (v: string) => void;
};

export default function SearchField({
  searchText,
  setSearchText,
}: SearchFieldProps) {
  return (
    <div className='flex flex-row ml-3 w-full py-2 items-center'>
      <TextField
        labelClassName='flex items-center justify-center whitespace-nowrap font-bold text-red-700 mr-2'
        labelContent='검색'
        inputClassName='h-12 text-sm border rounded-lg w-full mr-4'
        inputPlaceholder='식당 이름...'
        text={searchText}
        setText={setSearchText}
      />
    </div>
  );
}
