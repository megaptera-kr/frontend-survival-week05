export default function Receipt() {
  return (
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
  );
}
