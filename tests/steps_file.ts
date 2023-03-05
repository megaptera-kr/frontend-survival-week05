/* eslint-disable func-names */
// in this file you can append custom step methods to 'I' object

module.exports = function () {
  Feature('CodeceptJS demo');

  Scenario('check Welcome page on site', ({ I }) => {
    I.amOnPage('/');
    I.see('푸드코트 키오스크');
  });
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
};
