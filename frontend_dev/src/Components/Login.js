/* 로그인 페이지 */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Login.css';

const Login = () => {
    return (
        <div className="login">

            <header>
                <div className="inner">
                    <div className="logo"><Link to="/login">로그인</Link></div>

                    <ul className="util">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About us</Link></li>
                        <li><Link to="#">Service</Link></li>
                    </ul>
                </div>
            </header>

            <section>
                <div className="box">
                    <div className="item"><Link to="#"><img src="img/kakao_login.png"></img></Link></div>
                    <div className="item"><Link to="#"><img src="img/naver_login.png"></img></Link></div>
                </div>

                <div className="footer">
                    <p><Link to="#">사이트가 처음이세요?</Link></p>
                    <p><Link to="signup.html">회원가입</Link></p>
                </div>
            </section>

        </div>
    )
}

export default Login
