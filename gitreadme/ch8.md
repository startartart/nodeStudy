# Chapter 8 : 데이터베이스 사용하기

* MySQL : 일반적인 관계형 데이터베이스
    * 사전준비작업 : macOS이므로 brew를 통한 mysql 설치 및, Oracle 회원가입 후 MySQLWorkbench 다운로드한다.
    * MySQLWorkbench에서 dev 데이터베이스 만든 후 customers table 만든다.
    * `npm install mysql`을 통해 `mysql` 모듈 설치한다.

* `mysql` 모듈 쿼리 수행절차 : 데이터베이스 연결 `createConnection()` -> 쿼리 수행 -> 결과 받기 -> 연결 종료
    > 만약 데이터베이스에 연결하기 위한 Connection을 만들어 놓고, 연결을 종료하지 않는 경우 리소스가 낭비될 수 있다. 또한, 동시 사용자가 많은 경우에는 쿼리를 먼저 수행한 사용자의 Connection이 처리될 때까지 기다려야 하기 때문에 비효율적이다.
    * Connection Pool : 데이터베이스에 연결된 Connection을 미리 여러 개 만들어 Pool에 보관한 후, 필요할 때마다 Pool에서 Connection을 가져와서 사용하고 사용이 끝나면 다시 Pool로 반환하는 방법을 말한다.
        > 동시 접속자가 많은 경우 동시에 처리할 수 있는 Connection Pool을 통해 서버를 좀 더 안정적으로 운영할 수 있다.
    
    * MySQL 사용자 계정 생성 : `CREATE USER '{userID}'@'%' IDENTIFIED BY '{password}';`
    * 데이터베이스 권한 부여 : `GRANT ALL PRIVILEGES ON {databaseName}.* to 'userID'@'%' WITH GRANT OPTION;`

* database 조회 실습
    * `ch8/mysql/sql.js` : 쿼리가 저장되어있다.
    ```js
    customerList: `select * from customers`
    ```
    * `ch8/mysql/index.js` : Pool을 생성하고 쿼리문을 실행하여 반환하는 함수를 작성한다.
    * `ch8/app.js` : 이전에 작성된 `query()` 함수를 받아와 `/api/customers` 접속 시 조회한다.

* [dotenv 모듈 사용하기](../gitreadme/middleware/dotenv.md)

* database 추가 실습
    * 추가 쿼리를 작성한다.
    ```js
    cusomerInsert: `insert into customers set ?`
    ```
    * `body-parser`의 `json` 타입의 `body`를 최대 50메가로 제한하고 파싱처리한다.
    * 고객 정보 추가 라우터로 `POST` 방식의 입력 라우트를 받는다. `/api/customer/insert`

* database 수정 실습
    * 수정 쿼리를 작성한다.
    ```js
    customerUpdate: `update customers set ? where id=?`
    ```
    * 고객 정보 수정 라우터로 `PUT` 방식의 입력 라우트를 받는다. `/api/customer/update`

* database 삭제 실습
    * 삭제 쿼리를 작성한다.
    ```js
    customerDelete: `delete from customers where id=?`
    ```
    * 고객 정보 삭제 라우터로 `DELETE` 방식의 입력 라우트를 받는다. `/api/customer/delete/:id`

* `nodemon` `Sequelize` 미들웨어
    * `nodemon`으로 실행 시 변경 사항을 감지해 재실행 없이 자동 반영이된다.
    * 특정 디렉터리만 감시하려면 `nodemon --watch {감시대상} {재실행 파일}`과 같이 실행한다.
    * [Sequelize 사용하기](../gitreadme/middleware/sequelize.md)

* ORM의 장단점 : 실무에서는 Sequelize를 사용하지 않고 쿼리문을 직접 작성해서 사용하는 경우가 대부분이고, 테이블간 조인을 복잡하게 처리해야 할 상황이 많다.
    * 규모가 큰 애플리케이션의 경우 ORM으로 원하는 데이터를 추출하기 위한 코드를 구현하는 것이 쉽지 않고 잘못 구현하면 오히려 성능이 낮아진다.
    * SQL 쿼리문에 대한 충분한 경험이 없다면 당장 ORM을 쓰는 것 보다 직접 쿼리를 짜는 것이 좋다.

* MongoDB : NoSQL로, 컬렉션과 문서에 정보를 저장한다.
    * 운영체제가 Mac이므로, `brew`를 통해 설치하였다.