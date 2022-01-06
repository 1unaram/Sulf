const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// portnumber를 8080으로 지정
app.set('port', process.env.PORT || 8080);

// 백 -> 프론트 (설문 상세 정보 넘기기)
const post = require("./Router/post");
app.use("/postReq", post);  // ./Router/post.js에서 처리

// 프론트 -> 백 (설문 등록)
app.use(bodyParser.json())
app.use(cors());
const uploadSurvey = require("./Router/uploadSurvey");
app.use("/uploadSurvey", uploadSurvey);  // ./Router/uploadSurvey.js에서 처리

// db 연결
const connection = require("./mysql")
connection.connect();

// 8080번 포트넘버를 가진 서버 생성
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});