import { IoIosSearch } from 'react-icons/io';

import TextField from './TextField';
import Button from './Button';

export default function SearchField() {
  return (
    <div className='flex flex-row ml-3 '>
      <form className='flex w-full relative py-2 items-center'>
        <TextField
          labelClassName='flex items-center justify-center whitespace-nowrap font-bold text-red-700 mr-2'
          labelContent='검색'
          inputClassName='w-full h-12 text-sm text-gray-50 border rounded-lg'
          inputPlaceholder='식당 이름...'
        />
        <Button
          className='absolute right-2 top-4 text-3xl text-gray-500'
          content={<IoIosSearch />}
        />
      </form>
    </div>
  );
}
