# Chapter 2 : 서버 프로그램을 위한 자바스크립트

* 변수 선언자 이해하기
    * var, let, const
        * var : 변수 선언자를 사용하지 않으면 자동으로 var이 된다, 선언 이후에도 재선언이 가능하다.
        * let : 재선언을 막은 var
        * const : 선언과 동시에 할당되는 const, 재할당이 불가능하다.
* 화살표 함수
```js
const hello = (name) => {return "Hello" + name}; // 일반적인 화살표 함수 표현

const hello2 = name => {return "Hello" + name}; // 파라미터가 하나만 있을 때 주변 괄효 생략 가능

const hello3 = name => "Hello " + name; // 유일 문장이 return 일경우, returm과 중괄호 생략 가능
```

* Array 내장 함수
    * sort() : 기본 오름차순 정렬을 가진다.
        ```js
        let points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return a - b}); // 내림차순의 경우 b-a

        // 정렬된 배열을 역순으로 정렬
        points.reverse();
        ``` 
        > Object의 특정 키를 기준으로 sort() 함수를 사용하는 경우가 많다.

    * filter() : 특정 조건을 만족하는 배열 요소를 추출해 새 배열로 반환한다.
    * map() : 배열의 데이터가 Object형일 때, 추가요소 혹은 제거요소를 포함해 새로운 형태로 반환한다.
    * reduce() : 배열의 각 데이터가 실행 값으로 인한 누적값을 반환한다.

* Template Literals : 백틱( ` )을 사용하여 문자열 안에 ${변수명} 형태로 적용이 가능하다.

* Spread Operator : 배열, 문자열과 같이 iteration 형태의 데이터를 요소 하나하나로 분해해서 사용이 가능하게끔 해준다.

* Object Destructuring : Object 형태의 데이터로 추출하고 받을 수 있게 한다.

* Array Destructuring : Object 형태와 동일, 인덱스 번호를 사용하게 된다.
    > 배열 안에 배열이 있는 경우도 분해할 수 있다.
    ```js
    function getProfile() {
        return [
            'John',
            'Doe',
            ['Red', 'Green', 'Blue']
        ];
    }

    let [
        firstName, lastName, [
            color1, color2, color3
        ]
    ] = getProfile();

    console.log(color1, color2, color3);
    ```

* Default Function Parameter : 파라미터가 전달되지 않을 경우 사용할 기본값을 설정한다.
    ```js
    function say(message="파라미터가 넘어오지 않았어요") {
        console.log(message);
    }
    say();
    ```

* Rest Parameter : 명시되어 있지 않은 파라미터 갯수를 전달하는 방법
    ```js
    function sum(...args) {
        let total = 0;
        for (let x of args) {
            total += x;
        }
        return total;
    }

    sum(3, 2, 5, 7, 4, 23);
    sum(3, 2);
    sum(21, 17, 38);
    ```

* Promise : 비동기처리에 사용되는 객체
    * 파일쓰기, 데이터베이스 트랜잭션 처리 등 대기하지 않고 다음 코드를 실행할 수 있도록 해준다.
        ```js
        const promis = new Promise9((resove, reject) => {
            if (true) { // 처리가 성공적이라면
                resolve("결과 데아터");
            } else {
                reject(new Error("에러"));
            }
        });
        ```

* Async/Await : Promise와 동일한 목적으로, await를 사용한 코드는 반드시 async여야 한다.
    ```js
    async function myFunction() {
        const r = await asyncFunction();
    }

    const myFunction2 = async() => {
        const r = await asyncFunction();
    }
    ```

* Class : 객체를 생성하기 위한 템플릿, 일종의 내부에 정의된 틀이다.
    * constructor(생성자) : 클래스를 정의하기 위한 기본 값
        > this 키워드는 자신이 속한 객체 또는 생성할 인스턴스를 가리키는 자기 참조 변수이다. 여기서 class 객체 중 선언될 자기 자신을 의미한다.
    * 상속 : extends 메소드를 사용하여 상속하는데, super() 함수를 이용해 부모 클래스의 기능을 상속 받을 수 있다.

* 정규 표현식 (Regular Expression) : 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴이다.
    * 정규식에서 제공되는 내장함수 : exec(), test(), match(), search(), replace(), split()
    * 정규식 특수 문자 : 일반적으로 /World/ 와 같은 패턴으로 구성될 수 있으나 조건에 따라 더 복잡한 문자열 패턴을 만들어 낼 수 있다.