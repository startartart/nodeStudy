# cookie-session

* `cookie-session` : 쿠키 기반의 클라이언트의 세션 데이터를 관리한다.
* 사용자 세션은 쿠키를 사용해서 서버 혹은 클라이언트에 2가지 방법으로 저장할 수 있으며, **이 모듈은 쿠키 내에 클라이언트의 세션 데이터를 저장한다.**
* 반면 `express-session`은 일반적으로 쿠키 내에 클라이언트의 세션 식별자만 저장하고 서버의 세션 데이터는 데이터베이스 혹은 서버 파일에 저장한다.
    > `cookie-session`은 브라우저의 최대 쿠키 크기 내에서만 저장할 수 있지만, 서버 측 데이터베이스와 별도의 리소스가 필요하지 않는다는 장점이 있으며 특정 부하 분산 시나리오를 단순화할 수 있다.
    ```js
    app.use(cookieSession({
        name: 'session',
        keys: [/* secret keys */],
        maxAge: 24 * 60 * 60 * 1000 // 24시간 유지
    }));
    ```

# express-session

* `express-session` : 데이터를 서버에 저장하여 안전하고 더 많은 데이터를 저장한다.
* 서버 메모리에 저장되며, 재시작시 세션 정보가 모두 초기화되므로 안정적 관리를 위해 물리적인 DB 혹은 파일로 저장하는 것이 좋다.
* `session-file-store` : 세션 정보를 파일로 저장해서 관리할 수 있다.
    ```js
    app.use(session({
        secret: 'secret key',
        resave: false.
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: true,
            maxAge: 60000
        },
        store: new fileStore()
    }));
    ```
    * 다음 코드를 통해 `sessions` 폴더에 세션 정보가 `json` 파일로 생성된다.