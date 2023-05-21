Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('김밥');

  I.fillField('검색', '메가');
  I.see('메가반점');
  I.see('메가김치찌개');
  I.dontSee('메리김밥');

  I.click('중식');
  I.see('메가반점');
  I.dontSee('메가김치찌개');

  I.click('전체');
  I.see('김치찌개');
  I.see('계란말이');
  I.dontSee('메리김밥');

  I.click('한식');
  I.fillField('검색', ' ');
  I.see('메가김치찌개');
  I.see('데브부엌');
  I.dontSee('메가반점');
  I.dontSee('로드스시');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.click('선택', { name: '#차돌짬뽕' });
  I.click('선택', { name: '#닭떡국' });
  I.click('선택', { name: '#김치찌개1인' });
  I.click('선택', { name: '#모듬초밥' });

  I.click('취소', { name: '#닭떡국' });

  I.click('31,000원 주문');

  I.waitForText('주문번호');

  I.wait(6);

  I.see('[영수증 나오는 곳]');
});
