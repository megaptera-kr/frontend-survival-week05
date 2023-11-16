export default function App() {
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>점심 바구니</h2>
      <button type="button">합계 : 0원 주문</button>

      <div>
        <label htmlFor="search">검색</label>
        <input id="search" placeholder="식당 이름" />
      </div>
      <ul>
        <li><button type="button">전체</button></li>
        <li><button type="button">중식</button></li>
        <li><button type="button">한식</button></li>
        <li><button type="button">일식</button></li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              메가반점
            </td>
            <td>
              중식
            </td>
            <td>
              <ul>
                <li>
                  <span>짜장면(8000원)</span>
                  <button type="button">선택</button>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <p>[영수증 나오는 곳]</p>
      </div>
    </>

  );
}
