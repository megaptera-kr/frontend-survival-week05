export default function Cart() {
  return (
    <section className='w-full bg-white'>
      <div className='bg-slate-700'>
        <h2 className='ml-3 py-4 text-xl font-bold text-white'>점심 바구니</h2>
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
  );
}
