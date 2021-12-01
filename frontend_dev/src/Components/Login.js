/* 로그인 페이지 */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Login.css';
import './styles/Total.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Login = () => {
    return (
        <div className="login">

            <PageHeader
                isLogo={false}
                title="로그인"
                titleDestination="Login"
                util={["Home", "About us", "Service"]}
            />

            <section>
                <div className="box">
                    <div className="item"><Link to="/"><img src="img/kakao_login.png" alt="kakao_login"></img></Link></div>
                    <div className="item"><Link to="/"><img src="img/naver_login.png" alt="naver_login"></img></Link></div>
                </div>

                <div className="footer">
                    <p><Link to="/">사이트 이용에 어려움이 있나요?</Link></p>
                    <p><Link to="/">사이트 이용 방법 보기</Link></p>
                </div>
            </section>

        </div>
    )
}

export default Login
