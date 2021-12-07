const express = require('express');
const path = require('path');
const app = express();

// cors 해결
// app.use(express.json());
// var cors = require('cors');
// app.use(cors());

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, '/frontend_dev/build')));

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});

// 리액트에게 라우팅 넘기기
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/frontend_dev/build/index.html'));
// })
