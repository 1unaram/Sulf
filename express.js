const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, '/frontend_dev/build')));

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});

// 수정
