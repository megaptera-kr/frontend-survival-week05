import { IoIosSearch } from 'react-icons/io';

import TextField from './TextField';
import Button from './Button';

type SearchFieldProps = {
  searchText: string;
  setSearchText: (v: string) => void;
};

export default function SearchField({
  searchText,
  setSearchText,
}: SearchFieldProps) {
  return (
    <div className='flex flex-row ml-3 w-full relative py-2 items-center'>
      <TextField
        labelClassName='flex items-center justify-center whitespace-nowrap font-bold text-red-700 mr-2'
        labelContent='검색'
        inputClassName='w-full h-12 text-sm border rounded-lg'
        inputPlaceholder='식당 이름...'
        text={searchText}
        setText={setSearchText}
      />
      <Button
        className='absolute right-2 top-4 text-3xl text-gray-500'
        content={<IoIosSearch />}
      />
    </div>
  );
}
