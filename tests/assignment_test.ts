Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');
  // TODO: E2E 테스트를 작성해주세요.
  I.see('푸드코트 키오스크');

  I.fillField('검색', '메');
  I.see('메가반점');
  I.see('메리김밥');
  I.dontSee('혹등고래카레');

  I.click('일식');
  I.dontSee('메가반점');
  I.dontSee('메리김밥');
  I.dontSee('혹등고래카레');

  I.fillField('검색', ' ');
  I.see('혹등고래카레');
  I.dontSee('메가반점');
  I.dontSee('메리김밥');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  // TODO: E2E 테스트를 작성해주세요.
  I.see('푸드코트 키오스크');

  I.click({ name: '#짜장면' });
  I.click({ name: '#김밥' });

  I.click({ name: '#order' });

  I.waitForText('주문번호');
  I.see('총 가격: 11,500원'); // NOTE: 정규표현식 안됨?

  I.wait(7);
  I.see('영수증 나오는 곳');
});
