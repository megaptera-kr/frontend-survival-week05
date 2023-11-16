import { useState } from 'react';
import TextField from './components/TextField';
import useFetchProducts from './hooks/useFetchRestaurants';
import CategoryButtons from './components/CategoryButtons';
import { Category } from './types';

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<Category>('전체');
  const data = useFetchProducts();
  console.log(data);
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>점심 바구니</h2>
      <button type="button">합계 : 0원 주문</button>

      <TextField label="검색" value={query} setValue={setQuery} placeholder="식당 이름" />
      <CategoryButtons setCategory={setCategory} />
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
