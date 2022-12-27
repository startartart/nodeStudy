# Chapter 7 : Express로 웹 서버 구축하기

> Node.js에는 웹 서버가 이미 내장되어 있어 별도의 웹 서버 없이도 쉽게 웹 서버를 구축할 수 있다.

* 웹 서버를 만들기 위한 절차
    * `npm init` 을 통해 `package.json` 파일 생성하기
        * `package.json` 파일을 통해 정보를 관리한다.
    * 다양한 라이브러리 설치하기 : `npm install {pacakge_name}`
    * Express 설치후 `app.js`에서 웹 서버를 실행시킨다.

* 라우팅 처리 : 특정 엔드 포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말한다.
    > 특정 엔드 포인트란 URI(경로)와 HTTP 요청 메소드로 구분된 클라이언트에서 서버로 요청보낼 수 있는 문이다.
    * Express에서 라우트는 다음과 같은 구조를 가진다.
        1. app : Express의 인스턴스
        2. METHOD : HTTP 요청 메소드
        3. PATH : 서버에서의 경로
        4. HANDLER : 라우트가 일치할 때 실행되는 함수
    * 동일 라우트 경로에 대해서 HTTP 요청 메소드가 다르다면 호출되는 라우트가 달라진다. 
        > 자주 사용되는 Express 라우트는 `get`,`post`,`put`,`delete`이며, 요청 메소드에 상관없이 사용한다면 `all`을 사용한다.
    
    * 라우트 경로는 문자열, 문자열 패턴, 정규식을 이용해 만들 수 있다.
    
    * 라우트 핸들러는 클라이언트 요청에 응하는 콜백 함수이다. 라우트가 일치할 때 작동하며 `req`,`res`,`next` 파라미터를 가진다.
        * `next` 오브젝트를 사용해 2개 이상의 콜백 함수를 사용할 수 있으며, 콜백 함수 배열로 라우트를 처리할 수 있다.
    
    * 응답 메소드 중 한 가지 방법을 통하여 응답을 전송하고 요청-응답 주기를 종료할 수 있으며, 하나라도 호출되지 않은 경우에는 클라이언트 요청이 응답받지 못하고 정지된 채로 있는다.
        > 메소드는 `res.download()`,`res.end()`,`res.json()`,`res.redirect()`,`res.render()`,`res.send()` 등이 있다.
    
    * `app.route()` : 모듈식 라우트를 작성하여 중복성을 감소하고 코드를 효율적으로 관리한다.

    * `express.Router` : Router 클래스를 사용해 여러 파일로 분리 및 기능에 맞게 구현하여 사용이 가능하다.
        * 분리된 라우트 모듈을 통해 대규모 서비스를 운영 및 유지보수하기 용이하다.

* Error Handler : 에러코드를 발생시키기 위해 `throw new Error()`를 통해 클라이언트에게 에러 관련 메세지를 표시할 수 있다.
    ```js
    // 에러 처리 핸들러 미들웨어 함수 - 파라미터가 4개
    app.use(function (err, req, res, next) {
        res.status(500).json({statusCode: res.statusCode, errMessage:err.message}); // 상태코드 500, 에러 메시지 전달
    });

    app.get('/error2', (req, res, next) => {
        next(new Error('에러 발생')); // next() 함수를 사용해 에러 처리 핸들러로 에러 전달
    });
    ```
    > 일반적으로 오류 처리 미들웨어는 다른 app.use() 및 라우트 호출을 정의한 후에 마지막으로 정의해야 한다.

* 정적 파일 제공하기
    * Express 미들웨어 모듈인 `express.static`은 폴더에 있는 정적파일을 브라우저 URL을 통해 제공할 수 있다.
        ```
        http://localhost:3000/css/style.css
        http://localhost:3000/images/logo.jpg
        http://localhost:3000/js/common.js
        ```
    > 폴더가 여러개 일 경우 그만큼 선언하면 된다. `app.use(express.static('folder_name'));`
    * 마운트 경로를 지정한다면 파일에 대한 접근 경로가 바뀐다. `app.use('/mount_path', express.static('folder_name'));`

* 미들웨어 모듈 : Express에서는 요청과 응답의 중간에서 목적에 맞는 특정 기능을 하는 함수라 정의한다.
    * 자주 사용되는 모듈은 다음과 같다.
        * `body-parser` : HTTP 요청 body를 해석한다.
        * `compression` : HTTP 요청들을 압축한다.
        * `connect-rid` : 고유한 요청 ID를 생성한다.
        * `cookie-parser` : 쿠키 헤더를 파싱하고 `req.cookies`에 할당한다.
        * `cors` : 쿠키 기반의 세션을 생성한다.
        * `csurf` : CSRF 취약점을 방어한다.
        * `errorhandler` : 개발 중에 발생하는 에러를 핸들링하고 디버깅한다.
        * `method-override` : 헤더를 이용해 HTTP 메소드를 덮어쓴다.
        * `morgan` : HTTP 요청 로그를 남긴다.
        * `multer` : multi-part 폼 데이터를 처리한다.
        * `response-time` : 응답 시간을 기록한다.
        * `serve-index`, `server-index`, `serve-favicon` : 각각 주어진 경로의 디렉터리 리스트, 정적 파일, 파비콘을 제공한다.
        * `express-session` : 서버 기반의 세션을 생성한다.
        * `connect-timeout` : HTTP 요청 처리를 위해 timeout을 생성한다.
        * `vhost` : 가상 도메인을 생성한다.

* Postman 설치와 Express 라우트 테스트
    * 프런트와 백 개발자의 테스트간 불필요한 시간 낭비를 줄여주기 위한 시스템으로 Postman을 사용한다.
    * Express 라우트를 테스트하기 위해서는 클라이언트 환경이 필요하다.