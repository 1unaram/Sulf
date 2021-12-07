//회원가입시 이메일 보내는 코드

const nodemailer = require('nodemailer');

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    "auth": {
        "user": "92ee985122449d",
        "pass": "7e3d9046086024"
    }
}

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from: "yoonseak@naver.com",
    to: "bcec6566a3-9f2a49@inbox.mailtrap.io",
    subject: "Sulf 회원가입 성공",
    //text : "Sulf의 회원이 되신 것을 축하드립니다. 회원가입을 성공하여 메일을 보내드립니다. 앞으로 Survey와 함께하는 Life를 시작해보세요!"
    html: "<h2>sulf 회원가입을 성공하여 메일을 보내드립니다!</h2>"
};

send(content);