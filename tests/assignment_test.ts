Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('식당 이름');
  I.see('종류');
  I.see('메뉴');

  I.fillField('검색', '메가반점');
  I.see('메가반점');

  I.fillField('검색', '메리김밥');
  I.see('메리김밥');

  I.fillField('검색', '혹등고래카레');
  I.click('일식');
  I.see('혹등고래카레');

  I.fillField('검색', ' ');
  I.fillField('검색', ' ');
  I.click('중식');
  I.see('메가반점');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.click({ name: '#짜장면' });
  I.click({ name: '#짜장면' });
  I.click({ name: '#짬뽕' });
  I.click({ name: '#짬뽕' });
  I.click({ name: '#차돌짬뽕' });
  I.click({ name: '#차돌짬뽕' });

  I.see('합계: 50,000원 주문');
  I.click({ name: '주문버튼' });

  I.see('영수증');
  I.see('주문번호');
  I.see('총 가격:50,000원');

  I.wait(5);

  I.dontSee('주문번호');
  I.see('영수증 나오는 곳');
  // TODO: E2E 테스트를 작성해주세요.
});
