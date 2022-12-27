# connect-timeout

* `connect-timeout` : 클라이언트의 요청에 대해서 지정된 시간 동안 응답을 못하는 경우 타임아웃, 즉 연결을 종료하는 기능을 제공한다.
* `app.use(timeout('{N}s'))` : 모든 라우터에 대해서 N초의 타임라웃을 설정한다.
```js
// 라우터별로 타임아웃을 설정
app.post('/save', timeout('5s'), express.json(), haltOnTimedout, (req, res, next) => {
    savePost(req.body, (err, id) => {
        if (err) return next(err);
        if (req.timedout) return
        res.send('saved as id' + id);
    })
});

function haltOnTimedout (req, res, next) {
    if (!req.timedout) next()
}

function savePost (post, db) {
    setTimeout(function() {
        cb(null, ((Math.random() * 40000) >>> 0));
    }, (Math.random() * 7000) >>> 0)
};
```