# forever

* `forever` : 구현된 서버 프로그램이 비정상 종료되었을 때 자동으로 재실행 해준다.

* 일반적으로 `forever`을 사용하는 방법은 다음과 같다. -> `forever {action} {options} {fileName} {script-options}`
    * `forever start app.js` `forever stop app.js` `forever list` 다음 명령어를 통해서 실행 및 중지, list를 확인할 수 있다.
        * list 내에서는 고유한 `uid` `script` `pid` `id` 값을 가진다.
    * 자주사용되는 `action`은 앞의 `start` `stop` `stopall` `restart` `list` `config` `cleanlogs` 등이있다.
    * 사용되는 `options`의 경우 `-w` : 코드 수정시 자동 재실행, (`-l` : 로그, `-o` : 출력, `-e` : 에러) 옵션을 통한 로그 관리 등이있다.