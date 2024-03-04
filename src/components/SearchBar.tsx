import { IoIosSearch } from 'react-icons/io';

export default function SearchBar() {
  return (
    <>
      <div className='flex flex-row ml-3 items-center'>
        <div className='py-2 mr-2'>
          <span className='flex items-center justify-center whitespace-nowrap font-bold text-red-700'>
            검색
          </span>
        </div>
        <form className='flex w-full relative py-2'>
          <input
            className='w-full h-12 text-sm text-gray-50 border rounded-lg'
            type='text'
            placeholder='식당 이름...'
          />
          <button
            className='absolute right-2 top-4 text-3xl text-gray-500'
            type='button'
          >
            <IoIosSearch />
          </button>
        </form>
      </div>
      <section className='flex flex-col'>
        <div className='flex flex-row ml-3 items-center justify-items-start'>
          <button
            className='font-bold bg-black text-white text-sm w-12 h-8 rounded-lg mr-4'
            type='button'
          >
            전체
          </button>
          <button
            className='font-bold bg-black text-white text-sm w-12 h-8 rounded-lg mr-4'
            type='button'
          >
            전체
          </button>
          <button
            className='font-bold bg-black text-white text-sm w-12 h-8 rounded-lg mr-4'
            type='button'
          >
            전체
          </button>
          <button
            className='font-bold bg-black text-white text-sm w-12 h-8 rounded-lg mr-4'
            type='button'
          >
            전체
          </button>
        </div>
      </section>
    </>
  );
}
