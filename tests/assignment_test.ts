Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.click({ name: '일식' });
  I.see('기본카레');

  I.click({ name: '중식' });
  I.see('탕수육');

  I.click({ name: '전체' });
  I.see('제육김밥');

  I.fillField('검색', '메가');
  I.see('메가반점');

  I.fillField('검색', '혹등');
  I.see('일식');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.click({ name: '#차돌짬뽕' });
  I.click({ name: '#참치김밥' });
  I.click({ name: '#가라아게카레' });
  I.see('27,500원 주문');

  I.click({ name: 'orderReceipt' });
  I.dontSee('영수증 나오는 곳');
  I.see('차돌짬뽕(9,000원)');
  I.see('가라아게카레(14,000원)');
  I.see('총 가격: 27,500원');

  I.wait(8);

  I.see('영수증 나오는 곳');
});
