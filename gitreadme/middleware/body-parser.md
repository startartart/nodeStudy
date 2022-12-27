# body-parser

* `body-parser` : HTTP 요청 body를 해석한다.
* 클라이언트로부터 받는 데이터 중 multi-part(이미지, 파일)는 처리하지 못하는데 이 경우 multer 모듈을 사용해 처리할 수 있다.
* 이외 전달받는 데이터의 유형은 크게 `json`, `raw`, `text`, `urlencode`이고, 이 데이터를 처리하는 함수를 제공한다.
    ```js
    // 전체 적용
    app.use(express.urlencoded{
        extended: false
    });
    app.use(express.json({
        limit: '50mb'
    }));

    // 특정 라우터에만 적용도 가능하다.
    const urlencodedParser = express.urlencoded({
        extended: false
    });

    app.post('/login', urlencodedParser, (req, res) => {
        res.send('welcome, ' + req.body.username);
    });
    ```
> Express 4.16 이상 버전부터 body-parser 기능이 Express에 내장되어있으므로 `require`을 사용하지 않는다.