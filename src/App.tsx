import { IoIosSearch } from 'react-icons/io';

export default function App() {
  return (
    <div className='m-auto w-7/12	'>
      <h1 className='bg-teal-400 p-4 text-white text-center text-2xl font-bold'>
        푸드코트 키오스크
      </h1>
      <section className='w-full bg-white'>
        <div className='bg-slate-700'>
          <h2 className='ml-3 py-4 text-xl font-bold text-white'>
            점심 바구니
          </h2>
        </div>

        <ul className='flex flex-col bg-amber-50 rounded-lg p-3'>
          <li className='flex flex-row justify-between text-sm font-bold my-1'>
            <div className='flex'>
              <div className='mr-1'>삼겹살</div>
              <div>(9,000원)</div>
            </div>
            <button
              className='w-2/12 border-2 border-orange-300 rounded-3xl'
              type='button'
            >
              취소
            </button>
          </li>
          <li className='flex flex-row justify-between text-sm font-bold my-1'>
            <div className='flex'>
              <div className='mr-1'>삼겹살</div>
              <div>(9,000원)</div>
            </div>
            <button
              className='w-2/12 border-2 border-orange-300 rounded-3xl'
              type='button'
            >
              취소
            </button>
          </li>
          <li className='flex flex-row justify-between text-sm font-bold my-1'>
            <div className='flex'>
              <div className='mr-1'>삼겹살</div>
              <div>(9,000원)</div>
            </div>
            <button
              className='w-2/12 border-2 border-orange-300 rounded-3xl'
              type='button'
            >
              취소
            </button>
          </li>
        </ul>
        <div className='flex justify-end bg-amber-50 mr-3'>
          <button
            className='py-2 px-2 text-sm font-bold bg-teal-400 text-white rounded-xl'
            type='button'
          >
            합계: 8,000원 주문
          </button>
        </div>
      </section>
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

      <section className='mx-3 py-4'>
        <p>[영수증 나오는 곳]</p>
        <div>
          <h2>영수증</h2>
          <div>
            <h3>주문번호</h3>
            <p>12983u1239812u</p>
          </div>
          <div>
            <h3>주문목록</h3>
            <ul>
              <li>짜장면1(8,000원)</li>
              <li>짜장면2(8,000원)</li>
              <li>짜장면3(8,000원)</li>
            </ul>
          </div>
          <p>총 가격: 100,000원</p>
        </div>
      </section>
    </div>
  );
}
