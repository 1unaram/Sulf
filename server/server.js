const express = require('express');
const app = express();
const cors = require('cors')

// portnumber를 8080으로 지정
app.set('port', process.env.PORT || 8080);

// test 라우트
const test = require("./Router/test");
app.use("/postReq", test);

// post 테스트
app.use(cors());
const test2 = require("./Router/postTest");
app.use("/sendPost", test2);

const id = require("./Router/id");
app.use("/idReq", id);

// 8080번 포트넘버를 가진 서버 생성
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});

// 수정