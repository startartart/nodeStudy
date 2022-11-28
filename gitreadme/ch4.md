# Chapter 4 : Node.js 시작하기

* 자바스크립트 파일 실행하기 -> `node {file name}}`
* 모듈(Module) : 기능별로 분리되어 필요한 곳에서 호출이 가능하도록 하는 방법
    > 모듈은 분리된 각각의 자바스크립트 파일이고 각 파일은 특정한 목적을 가진 여러 개의 함수와 변수의 집합이다.
    * 모듈을 `export`, 필요한곳에 `require({path})`

***

#### 자체 심화문제 : calculator.js를 rest parameter로 구현하라.
```js
console.log(add(1,2,3,4,5,6,7,8,9,10));
console.log(minus(10,9,8,7,6,5,4,3,2,1));
console.log(mul(5,3,2,1));
```
결과는 다음과 같아야 한다.
```
55
-35
30
```