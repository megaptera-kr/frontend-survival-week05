Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  // TODO: E2E 테스트를 작성해주세요.
  I.see('푸드코트 키오스크');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');

  I.click('일식');
  I.see('소시지카레');
  I.dontSee('우동');

  I.fillField('검색', '카레');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  // TODO: E2E 테스트를 작성해주세요.

  I.see('푸드코트 키오스크');

  I.click({ name: '#차돌짬뽕' });
  I.click({ name: '#제육김밥' });
  I.click({ name: '#가라아게카레' });
  I.click({ name: '#닭가슴살카레' });

  I.click('합계: 41,000원 주문');

  I.waitForText('주문번호');
  I.see('총 가격: 41,000원');

  I.wait(3);

  I.see('영수증 나오는 곳');
});
