# Chapter 5 : Node.js 내장 모듈과 객체

* Console : 일반적으로 디버깅을 위해 사용된다.
    * Console 클래스 : `console.log(), console.error(), console.warn()` 등..
        > 터미널을 통해서 디버깅을 위한 콘솔 메시지를 출력할 수도 있지만, 터미널의 경우는 사람이 계속 주시할 수도 없고 콘솔을 통해서 메시지가 많이 출력되면 이미 지나친 메시지를 추적하는 것도 쉽지 않다. 이를 위해 Console 클래스를 사용하여 필요한 메시지들을 파일로 기록할 수 있다.
        * `console.log(내용, ...args)` 일반적인 로그를 콘솔에 출력한다.
        * `console.error(내용, ...args)` 에러를 콘솔에 출력한다.
        * `console.table(테이블형 데이터)` Array/Object를 테이블 형태로 콘솔에 출력한다.
        * `console.time(레이블)/console.timeEnd(레이블)` 각각 전달된 인수 값이 일치하는 코드 사이의 실행 시간을 측정해서 출력한다. 기본값은 default
        * `console.dir(오브젝트, 옵션)` 객체를 콘솔에 출력할 때 사용한다. 옵션의 `depth`는 객체 안 객체의 단계를 지정할 수 있다.

* Timers
    > 타이머 모듈의 모든 함수는 전역 함수이기 때문에 require 없이 사용이 가능하다.
    * `setTimeout(콜백, 밀리초)` 설정한 밀리초 이후 콜백함수가 실행된다.
        * 이벤트 루프를 블로킹하거나 이벤트 큐에 보유하고 있는 다른 실행 코드가 타임아웃의 실행을 뒤로 밀수 있기에 정확하게 밀리초 후에 실행된다는 보장은 없다. 
        * `clearTimeout()` 을 통해 취소가 가능하다.
    * `setInterval(콜백, 밀리초)` 설정한 밀리초마다 지정된 콜백함수가 실행된다.
        * `clearInterval()` 을 통해 취소가 가능하다.
    * `setImmediate(콜백)` 현재 이벤트 루프 주기 끝에 코드를 실행한다.
        * 함수 호출 뒤에 오는 모든 코드가 먼저 실행된 후 바로 다음에 실행되기에 즉각 실행은 아니다.
        * `clearImmediate()` 을 통해 취소가 가능하다.

* Process : 현재 실행되고 있는 Node.js 프로세스에 대한 정보와 제어를 제공한다.
    > 프로세스 객체는 EventEmitter의 인스턴스로 이벤트가 발생할 때마다 리스너를 등록할 수 있다.
    * `beforeExit`, `exit`, `disconnect`, `message` 등 ..
    * `process.nextTick` : nextTick을 통해 추가한 콜백 함수는 'next tick queue'에 추가된다.
    * `process.exit()` : 실행 중인 Node.js 프로세스를 종료한다. 인수로 상태코드 `0은 '정상종료'`, `1은 '비정상 종료'`를 의미한다.
        > 만약 서버를 구동 중이라면, 호출되는 순간 서버가 멈추게 된다. 서버를 멈추는 것은 위험한 일이므로 조심해서 사용해야 한다.
        * forever 기능 : 서버가 멈추면 자동으로 다시 시작되는 기능, 변경된 옵션이 반영된다.

* OS : 임시 파일 저장 경로 혹은 클러스터 구성을 위한 CPU 코어 수를 알기위한 용도로 많이 사용된다.

* Path : 파일과 디렉터리 경로 작업을 위한 유틸리티를 제공한다.
    * `path.basename(path[,ext])` : 경로의 마지막 부분을 반환한다.
        ```js
        console.log(__filename); // 현재 파일의 절대 경로
        console.log(path.basename(__filename)); // 경로의 마지막 부분
        console.log(path.basename(__filename, '.js')); // 경로의 마지막 부분에서 확장자를 제거한 이름
        ```
    * `path.delimiter` : 운영체제별로 환경 변수 구분자를 가져온다. 윈도우는 세미콜론(;), 맥과 리눅스의 경우는 콜론(:)
    * `path.dirname(path)` : 파일이 위치한 폴더 경로를 반환한다.
        ```js
        console.log(__filename); // 현재 파일의 절대 경로
        console.log(path.dirname(__filename)); // 파일이 위치한 디렉터리(폴더) 경로
        ```
    * `path.extname(path)` : 파일의 확장자를 반환한다.
        ```js
        console.log(path.extname('index.html')); // 파일의 확장자, 출력 결과 - .html
        ```
    * `path.format(pathObject)` : `dir, root, base, name, ext` 프로퍼티를 사용해서 경로 문자열을 반환한다.
    * `path.isAbsolute(path)` : 주어진 파일의 경로가 절대경로인지 상대경로인지 판단한다.
    * `path.join([...path])` : 문자열로 주어진 경로들을 모두 합쳐서 하나의 경로로 만들어서 반환한다.
    * `path.parse(path)` : `path.format()` 함수와 반대로 문자열로 된 경로를 `pathObject`로 반환한다.
    * `path.sep` : 경로 구분자를 반환한다. 윈도우는 역슬래시(\), 맥과 리눅스의 경우 슬래시(/)

* URL : 인터넷 주소에 해당하는 url을 다루기 위한 모듈이다.
    > url 모듈을 가장 많이 사용하게 되는 예는 주어진 url 정보에서 전달된 쿼리 데이터를 추출할 때이다.
    * WHATWG, 레거시 API : WHATWG 방식과 Node.js 레거시 방식은 반환되는 Object의 구조가 다르다.
        > **WHATWG API**는 new URL로 생성(웹브라우저에 사용하는 표준), **레거시 API**는 url를 require로 호출해 parse() 함수를 사용한다.

* Crypto : 다양한 암호화 기능을 제공한다.
    > 실제 Node.js에서 자주 사용하게 되는 암호화는 단방향 암호화이다.
    * `createHash()` 함수릍 통해 암호화에 사용할 알고리즘을 전달하고, `update()` 함수에 파라미터로 암호화할 문자열을 전달한 다음, `digest()` 함수로 인코딩 방식을 결정한다. 암호화된 비밀번호의 알고리즘을 알고 있다면 해킹에 노출될 것이다. 이를 위해 `salting 암호화` 를 사용한다.
        ```js
        const createSalt = () => {
            return new Promise((resolve, reject) => {
                crypto.randomBytes(64, (err, buf) => {
                    if (err) reject(err);
                    resolve(buf.toString("base64"));
                });
            })
        };
        ```
        > 다음 코드를 통해 64바이트 길이의 salt를 생성한다.
    * `pbkdf2()` 함수를 사용하여, 비밀번호를 암호화하는 함수는 암호화된 값과 salt값을 반환한다.
        ```js
        const createCryptoPassword = async (plainPassword) => {
            const salt = await createSalt();

            return new Promise((resolve, reject) => {
                crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
                    if (err) reject(err);
                    resolve({
                        password: key.toString("base64"), salt
                    });
                });
            })
        };
        ```
    * 데이터베이스에 저장되는 일반적인 사용자의 정보는 **salting된 password와 salt값**이 저장될 것이다. 사용자가 로그인을 시도할 때 이 값들을 가져와 입력한 비밀번호 값을 비교하여 로그인을 처리하게 된다.
        ```js
        const getCryptoPassword = async (plainPassword, salt) => {
            return new Promise((resolve, reject) => {
                crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err, key) => {
                    if (err) reject(err);
                    resolve({
                        password: key.toString("base64"), salt
                    });
                });
            })
        };
        ```
    
    * File system : fs 모듈은 파일 읽기, 쓰기, 삭제 그리고 폴더 생성, 삭제 등과 같은 파일 처리와 관련된 작업을 위한 모듈이다.
        * `fs.readFile(path, [options], callback)` : 파일을 옵션으로 지정한 문자 인코딩을 사용해서 읽은 후 결과를 callback() 함수로 전달하는 비동기 방식 함수이다.
        * `fs.readFileSync(path, [options])` : 동기 방식 함수이다.
        * `fs.writeFile(path, data, [options], callback), fs.writeFileSync(path, data, [options])` : 각각 비동기, 동기 방식으로 data를 쓰는 함수이다.
        * `fs.watchFile(filename[,options], listener)` :변경 사항이 발생하면 지정한 콜백 리스너 함수를 실행할 수 있다.
            > 데이터베이스 조작을 위한 쿼리문을 작성한 파일을 watchFile() 함수로 감시한다면, Node.js 서버를 재시작하지 않아도 변경된 내용을 바로 반영할 수 있다.

#### 자체 심화문제 : crypto.js에서 salting된 password와 salt값을 데이터베이스에 저장됨을 console로 나타내고 이를 다시 가져오는 작업을 console로 나타내라.
```
데이터베이스 저장이 되었습니다. password는 Sn8pci3s/REjIBGVsv0UKySB7f3PxNvBf35R29n7Vg/lj3nkt2hyIKcKVtoeqJ9ZAGNHKOu9S82Q/cynAsCdCw==,
salt는 BVsPbe12u93cJF6CEz+DDxJEJUVE4CH6mcaU3UAXRfXirgOpvDHYKDcFQeiedIB7uaSl89amKABZjFEKKnDCTw== 입니다.
데이터베이스에서 가져온 password는 Sn8pci3s/REjIBGVsv0UKySB7f3PxNvBf35R29n7Vg/lj3nkt2hyIKcKVtoeqJ9ZAGNHKOu9S82Q/cynAsCdCw==,
salt는 BVsPbe12u93cJF6CEz+DDxJEJUVE4CH6mcaU3UAXRfXirgOpvDHYKDcFQeiedIB7uaSl89amKABZjFEKKnDCTw== 입니다.
```