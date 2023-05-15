Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.fillField('검색', '메가');
  I.see('메가반점');
  I.see('중식');

  I.fillField('검색', '메리');
  I.see('메리김밥');
  I.see('한식');

  I.fillField('검색', ' ');

  I.click('한식');
  I.see('메리김밥');
  I.see('한식');
  I.click('일식');
  I.see('혹등고래카레');
  I.see('일식');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.click({ name: '#김밥' });
  I.click({ name: '#참치김밥' });
  I.click({ name: '#기본카레' });
  I.click({ name: '#가라아게카레' });

  I.see('김밥(3,500원)');
  I.see('참치김밥(4,500원)');
  I.see('기본카레(9,000원)');
  I.see('가라아게카레(14,000원)');

  I.click('합계: 31,000원 주문');

  I.waitForText('주문번호');
  I.waitForText('주문메뉴');
  I.see('총 가격: 31,000원');

  I.wait(6);

  I.see('[영수증 나오는 곳]');
});
