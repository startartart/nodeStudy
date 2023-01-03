# node-cron

* `node-cron` : `schedule()` 함수를 사용해서 정해진 시간에 작업을 수행하도록 설정할 수 있다.

* `schedule()` 함수는 3개의 파라미터로 구성되어 있다.
    * `expression` : 작업을 실행시킬 `cron` 표현식이다.
    * `function` : 실행할 작업에 해당하는 함수이다.
    * `options` : 설정 옵션 오브젝트이다.
        * `scheduled` : 기본 값은 `true`이며, `false`로 설정할 경우, `start()` 함수를 호출해야 스케줄링이 시작된다.
        * `timezone` : 타임존 기준을 설정한다.
            > 애플리케이션의 사용자가 전세계인이라 가정할 때, 타임존을 설정해야 그 국가에 맞는 시간으로 지정될 것이다.

* 이외 `ScheduledTask()` 함수로 `start()` `stop()` `destory()` `validate()` 등 다양한 기능을 사용할 수 있다.