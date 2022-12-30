# Sequelize

* `sequelize` : `promise` 기반 데이터베이스를 위한 Node.js ORM 도구이다.
    > ORM이란, Object Relational Mapping의 약자로 객체와 관계형 데이터베이스의 데이터를 매핑해주는 것을 말한다.
    * 별도의 쿼리문 작성 없이 데이터베이스의 데이터를 손쉽게 조작할 수 있도록 해 주는 도구이다.

* Sequelize를 사용하기 위해서 configuration 파일 및 모델 파일 등을 생성해야한다. -> `sequelize-cli`

* `./config/config.json` : 개발, 테스트, 운영 각각의 환경에 대한 별도의 데이터베이스 연결 정보를 관리하고 실행 환경에 맞게 설정해준다.
* `./models/index.js` : MySQL 데이터베이스 연결을 위한 접속정보를 가져와 sequelize 객체를 생성하고 데이터베이스 테이블 매핑 및 모델 변환과 관계 설정을 한다.

* `index.js`에서 처리될 모델을 만들어야한다.
    * 터미널에서 명령어를 통한 js 파일 생성및 매핑 -> `sequelize-cli mdoel:generate --name {table_name} --attributes attr1:type,attr2:type`
    
* 데이터 조회, 추가, 수정, 삭제
    * 조회 : `findAll(조건)`, `findOne(조건)`, `findByPK(pk)`
    * 추가 : `create()`
    * 수정 : `update()`
    * 삭제 : `destory()`
