const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// portnumber를 8080으로 지정
app.set('port', process.env.PORT || 8080);

// test 라우트
const post = require("./Router/post");
app.use("/postReq", post);

// post 테스트
app.use(bodyParser.json())
app.use(cors());
// app.post('/uploadSurvey', (req, res) => {
//     console.log(req.body)
// });
const uploadSurvey = require("./Router/uploadSurvey");
app.use("/uploadSurvey", uploadSurvey);

// 8080번 포트넘버를 가진 서버 생성
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});

// 수정