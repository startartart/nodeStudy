# Chapter 6 : json-server 이용하기

> **웹서버 구축의 소통** : 효율적으로 수행하기 위해 낭비되는 시간이 없도록 해야한다.

* json-sever : Node.js로 웹서버를 구축하는 백엔드 개발자뿐만 아니라 프런트엔드 개발자가 아직 웹 서버가 구축이 되지 않았을 때 프런트엔드 개발을 진행할 수 있도록 도와준다.
    * JSON 기반의 가상 REST API 서버 구축 모듈 : `npm install -g json-server` 
        
    
* REST API : HTTP URI를 통해 자원을 명시하고 HTTP Method를 통하여 CRUD를 수행하는 API이다.
    * 일반적으로 서버에 구현해 놓은 REST API를 클라이언트가 호출해 서버에 요청할 수 있다.
    * HTTP와 JSON을 사용할 수 있는 모든 플랫폼에서 사용이 가능해 언어에 종속되지 않는다.

* json 파일 생성 및 실행
    * `db.json` 작성후 콘솔에 `json-server --watch db.json` 커맨드 입력
        ```
            \{^_^}/ hi!

            Loading db.json
            Done

            Resources
            http://localhost:3000/post
            http://localhost:3000/comment
            http://localhost:3000/profile

            Home
            http://localhost:3000

            Type s + enter at any time to create a snapshot of the database
            Watching...
        ```
    * JSON 데이터의 세개의 키와 대응되며 각 리소스 URI를 호출해 GET, POST, PUT, DELETE를 실행할 수 있다.
    
***

#### 자체 심화문제 : HTTP 응답코드에 대해서 조사해보자.
* HTTP 응답코드 
    * 1** : 정보응답
    * 2** : 성공응답
    * 3** : 리다이렉션 메시지
    * 4** : 클라이언트 에러 응답
    * 5** : 서버 에러 응답
    * [더 자세한 링크](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)