Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');
  I.click('중식');
  I.see('짜장면');
  I.dontSee('기본카레');

  I.click('일식');
  I.see('가라아게카레');
  I.dontSee('제육김밥');

  I.click('한식');
  I.see('김밥');
  I.dontSee('닭가슴살카레');




  // TODO: E2E 테스트를 작성해주세요.
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');
  I.click({ name: '#짬뽕' });
  I.click({ name: '#김밥' });
  I.click({ name: '#차돌짬뽕' });
  I.click('합계: 20,500원 주문');
  I.see('영수증');





  // TODO: E2E 테스트를 작성해주세요.
});
