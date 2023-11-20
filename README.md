# 푸드키오스크 앱

- 간단하게 주문하고 영수증까지 출력해보는 푸드키오스크 앱입니다.
- 검색어에 따라 해당 결과에 맞는 식당을 찾아주고 메뉴까지 주문하면 영수증이 출력됩니다.!!

## 목적

- 테스트 코드 연습 및 클린코드를 위함

## 사용기술

- `React` `ExpressJS` `TypeScript` `StyledCompoent`
- `React Testing Library` `Jest` `CodeceptJS`

## 구현과정

- 전체적인 어플리케이션 구조에서 props drilling 을 피하고자 `ContextAPI`를 활용하였습니다.
- 비즈니스를 담당하는 훅을 커스텀 훅으로 만들어서 UI내부에서는 최대한 UI만을 보여주고자 코드를 작성했습니다.
- Util테스트(Jest), 컴포넌트별 단위 테스트는(RTL), E2E 테스트(CodeceptJS)를 진행하였습니다.

## 배운점과 학습해야할점

- 최대한 Prop 드릴링을 피하고자 ContextAPI와 Reducer를 활영하여 SRP를 실현해보고자 하였습니다.
- 현재는 컴포넌트단위 테스트에서 비즈니스로직까지 더 핸들링 해야하는건지 아니면 비즈니스 로직이 들어가있는 부분들에 대한 테스트는 E2E로 대체해도 되는건지 각 테스트 범위에서 수행하여야 하는 범위가 궁금합니다.
- 추가적으로 RTL에서 통합테스트를 진행하는 과정에서 Element를 찾지 못하는데 아직까지 원인을 찾지 못하여 이번주에 리팩토링을 진행하여 보완할 예정입니다.
- Playwright를 통하여 브라우저별 테스트에 관하여 학습해야 할 것 같습니다.

## 서버 실행하기

```shell
=> 서버 관련 Install
cd express-app
npm install

=> 클라이언트 관련 Install
npm install

=> 실행
npm run server
npm start

=> 컴포넌트 테스트
npm test

=> E2E 테스트
npm run codeceptjs
```
