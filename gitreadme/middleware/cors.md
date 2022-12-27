# cors

* `cors` : 쿠키 기반의 세션을 생성한다.
* **CORS(교차 출처 리소스 공유 정책)** : 추가 HTTP 헤더를 사용해서 도메인 또는 포트가 다른 서버의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제를 말한다.
    ```
         Access to fetch at ‘https://myhompage.com’ from origin ‘http://localhost:3000’ has been blocked by CORS policy: 
         No ‘Access-Control-Allow-Origin’ header is present on the requested resource. 
         If an opaque response serves your needs, set the request’s mode to ‘no-cors’ to fetch the resource with CORS disabled.
    ```
    * 웹 브라우저는 HTTP 요청에 대해서 어떤 요청을 하느냐에 따라 각기 다른 특징을 가진다.
        * 기본적으로 **Cross-Orign** 정책을 지원하는 태그는 `<img>`,`<video>`,`<script>`,`<link>`이다.
        * `XMLHttpRequest`,`Fetch API`는 기본적으로 **Same-Origin** 정책을 따른다.
    * 출처 즉, **Origin**은 **Protocol**과 **Host**, **Port**까지 모두 합친 URL이다.
        * **Same-Origin**은 말 그대로 동일 출처에 대한 정책이며, 출처가 다른 경우(Protocol, Host, Port가 다른 경우) 접근을 차단한다.
            > 출처 비교와 차단은 브라우저의 몫이며, 브라우저 내 SOP 정책을 비활성화 하는 방법을 통해 CORS Error를 해결하는 방법도 존재한다.
        * **SOP**를 위반해도 **CORS**를 따르면 다른 출처의 리소스라도 허용된다.
    * **CORS 동작 과정**에 따라, 서버에서 `Access-Control-Allow-Origin` 헤더에 허용할 출처를 기재해서 클라이언트에 응답하여야 한다.

* Node.js에서 세팅할 경우 서버 `header` 값으로 `Access-Control`을 설정한다. 
```js
// cors pacakge
app.use(cors({
    origin: "https://naver.com", // 접근 권한을 부여하는 도메인
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}));
```

---

* [참고사이트 및 출처](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F)
