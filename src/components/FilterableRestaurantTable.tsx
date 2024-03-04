import { IoIosSearch } from 'react-icons/io';

export default function FilterableRestaurantTable() {
  return (
    <>
      <section className='flex flex-col'>
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
      <section className='mx-3 py-4'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='w-2/12 border'>식당 이름</th>
              <th className='w-2/12 border'>종류</th>
              <th className='w-10/12 border'>메뉴</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center whitespace-nowrap border'>메가</td>
              <td className='text-center whitespace-nowrap border'>중식</td>
              <td className='text-center whitespace-nowrap border'>
                <ul className='flex flex-col text-left'>
                  <li className='flex flex-row items-center w-full py-0.2 text-sm'>
                    <span className='w-9/12 ml-2'>짜장면(8,000원)</span>
                    <button
                      className='font-bold bg-teal-400 text-white rounded-xl mr-2 w-3/12 h-8'
                      type='button'
                    >
                      선택
                    </button>
                  </li>
                  <li className='flex flex-row items-center w-full py-0.2 text-sm'>
                    <span className='w-9/12 ml-2'>짜장면(8,000원)</span>
                    <button
                      className='font-bold bg-teal-400 text-white rounded-xl mr-2 w-3/12 h-8'
                      type='button'
                    >
                      선택
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className='text-center whitespace-nowrap border'>메가</td>
              <td className='text-center whitespace-nowrap border'>중식</td>
              <td className='text-center whitespace-nowrap border'>
                <ul className='flex flex-col text-left'>
                  <li className='flex flex-row items-center w-full py-0.2 text-sm'>
                    <span className='w-9/12 ml-2'>짜장면(8,000원)</span>
                    <button
                      className='font-bold bg-teal-400 text-white rounded-xl mr-2 w-3/12 h-8'
                      type='button'
                    >
                      선택
                    </button>
                  </li>
                  <li className='flex flex-row items-center w-full py-0.2 text-sm'>
                    <span className='w-9/12 ml-2'>짜장면(8,000원)</span>
                    <button
                      className='font-bold bg-teal-400 text-white rounded-xl mr-2 w-3/12 h-8'
                      type='button'
                    >
                      선택
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
