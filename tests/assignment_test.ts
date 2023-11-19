Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');
  I.see('푸드코트 키오스크');

  I.click('중식');
  I.see('메가반점');

  I.click('한식');
  I.see('메리김밥');

  I.click('일식');
  I.see('혹등고래카레');

  I.fillField('검색', '혹등');
  I.dontSee('메가반점');

  I.fillField('검색', ' ');
  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');
  I.click({ name: '짜장면' });
  I.click({ name: '짬뽕' });
  I.click({ name: '탕수육' });

  I.see('합계 :30,000원 주문');

  I.click({ name: '짜장면-cancel' });

  I.see('합계 :22,000원 주문');

  I.click('#order-button');

  I.see('합계 :0원 주문');

  I.waitForText('주문 번호');

  I.wait(7);

  I.see('영수증 나오는 곳');
});
