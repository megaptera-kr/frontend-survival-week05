Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.see('점심 바구니');
  I.see('검색');
  I.see('전체');
  I.see('식당 이름');
  I.see('메가반점');
  I.see('데브부엌');

  I.click('한식');
  I.see('훈제오리김밥');
  I.dontSee('짜장면');

  I.click('전체');

  I.click('일식');
  I.see('모듬초밥');
  I.dontSee('김밥');
  I.dontSee('제육김밥');

  I.fillField('검색', '로드');
  I.see('특선초밥');
  I.see('17900원');
  I.dontSee('메리김밥');

  I.fillField('검색', ' ');

  I.click('전체');

  I.see('메리김밥');
  I.see('메가김치찌개');
  I.see('컵라면');
});

Scenario('점심 바구니', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.click({ name: '#짜장면' });
  I.click({ name: '#짬뽕' });
  I.click({ name: '#김밥' });
  I.click({ name: '#기본카레' });

  I.click('합계: 28,500원 주문');

  I.waitForText('주문번호');
  I.see('총 가격: 28,500원');

  I.wait(7);

  I.see('영수증 나오는 곳');
});
