# response-time

* `response-time` : 클라이언트 요청에 대한 응답 시간을 관리한다.
> 응답 시간을 모니터링하고 어떤 프로그램의 응답이 오래 걸리는 지 주시한다. 오래 걸리는 긴ㅇ이 있다면 성능을 개선시켜야 한다.
```js
// 응답시간 콘솔 출력
app.use(responseTime((req, res, time) => {
    console.log(`${req.method} ${req.url} ${time}`)
}))
```