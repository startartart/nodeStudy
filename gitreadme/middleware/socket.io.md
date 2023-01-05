# socket.io

* 클라이언트가 `socket.io` 서버에 접속하면 `connection` 이벤트가 발생하는데, `io` 객체는 `socket.io` 서버와 연결된 전체 클라이언트와 메세지를 송수신하는 인터랙션을 위한 객체이다.
    * `connection` 이벤트가 발생하면 이벤트 핸들러 함수로 `socket` 객체가 전달된다.
    * 이후 여러 이벤트를 통하여 메세지를 송수신할 수 있다.
        * 서버에서 클라이언트로 메세지를 전달하는 함수는 다음과 같으며 파라미터로 이벤트명과 메세지를 가진다.
            * `io.emit()` 접속된 모든 클라이언트에서 메세지 전송
            * `socket.emit()` 메세지를 전송한 클라이언트에게만 메세지 전송
            * `socket.broadcast.emit()` 메세지를 전송한 클라이언트를 제외한 나머지 클라이언트에게 메세지 전송
            * `io.to(id).emit()` 지정된(id) 특정 클라이언트에게만 메시지 전송
        * 이외 클라이언트 접속종료는 `disconnct` 이벤트가 발생한다.

* socket 실습을 위해 `cors` 옵션을 허용 도메인(여기서 vscode extension인 LiveServer를 사용하면 임의로 5500포트가 열리므로)을 지정한 다음 `io` 객체에 적용한다.
* 이벤트명을 지정하고, 서버와 클라이언트측에서 각각 코드를 작성한다.