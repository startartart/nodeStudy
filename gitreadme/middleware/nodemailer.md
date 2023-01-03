# nodemailer

* `nodemailer`
    * 다른 모듈에 의존성이 없는 독립된 모듈이다.
    * 유니코드를 지원하기 때문에 영어는 물론 한국어, 중국어 등 모든 언어를 지원한다.
    * 파일 첨부 기능을 지원한다.
    * 일반 텍스트뿐만 아니라 HTML을 본문 내용에 사용가능하다.
    * TLS/STARTTLS를 사용해서 안전한 이메일 전송을 지원한다.
    * OAuth2 인증을 지원한다.
    * SMTP 연결을 위해 프록시 사용이 가능하다.

* SMTP transport : 이메일 전송을 위해서 `transporter` 객체가 필요하며 `createTransport()` 함수를 통해 생성한다.
    * `createTransport()` 함수로 생성된 객체(여기서는 SMTP 서버를 사용해서 생성하였다.)는 정상적인 접속이 이루어지는지 `verify()` 함수를 통해 확인할 수 있다.

* 이메일 보내기 : 생성된 객체를 `sendMail()` 함수를 통해 전송한다.
    * `sendMail` 함수의 파라미터는 `data`의 `from` `to` `cc` `bcc` `subject` `text` `html` `attachments` 옵션과 `callback`이 존재한다.
        > 실제 서비스에서는 STMP 서버가 존재할지도 모르나, 개인 프로젝트에서는 이러한 서버를 갖추지 못하는 경우가 많기에 Gmail을 통해 서비스를 이용한다.

