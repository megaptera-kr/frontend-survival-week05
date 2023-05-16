Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('전체');
  I.see('한식');
  I.see('중식');
  I.see('일식');

  I.click('중식');
  I.see('짜장면');
  I.see('짬뽕');
  I.dontSee('김밥');

  I.click('한식');
  I.see('김밥');
  I.dontSee('짜장면');

  I.click('일식');
  I.see('카레');
  I.dontSee('김밥');

  I.click('전체');
  I.see('카레');
  I.see('김밥');
  I.see('짬뽕');

  I.fillField('검색', '메가');
  I.see('짜장면');
  I.see('짬뽕');
  I.dontSee('김밥');

  I.fillField('검색', '김밥');
  I.see('참치김밥');
  I.see('훈제오리김밥');
  I.dontSee('짜장면');

  I.fillField('검색', ' ');
  I.see('카레');
  I.see('김밥');
  I.see('짬뽕');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.see('점심 바구니');

  I.click({ name: '#짜장면' });
  I.click({ name: '#짬뽕' });
  I.click({ name: '#훈제오리김밥' });
  I.click({ name: '#기본카레' });

  I.click('합계: 30,500원 주문');

  I.see('영수증');
  I.see('주문번호');

  I.wait(6);

  I.dontSee('주문번호');
  I.dontSee('총 가격');
});
