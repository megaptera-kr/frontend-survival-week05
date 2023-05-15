Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.fillField('[name="searchText"]', '메리김밥');

  I.see('제육김밥');

  I.fillField('[name="searchText"]', ' ');

  I.click('중식');

  I.see('메가반점');
  I.dontSee('메리김밥');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.click({ name: '#차돌짬뽕' });
  I.click({ name: '#짬뽕' });
  I.click({ name: '#탕수육' });
  I.click({ name: '#짜장면' });

  I.click('합계: 39000원 주문');

  I.waitForText('영수증');
  I.see('총 가격: 39,000원');

  I.wait(5);

  I.see('영수증 나오는 곳');
});
