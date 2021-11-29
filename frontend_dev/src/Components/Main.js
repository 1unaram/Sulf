/* 메인 페이지  */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Main.css';
import './styles/Total.css';

const Main = () => {
    return (
        <div className="main">

            <header>
                <div className="inner">

                    <div className="logo">
                        <Link to="/"><img src="img/logo1.png"></img></Link>
                    </div>

                    <ul className="util">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/aboutus">About us</Link></li>
                        <li><Link to="/service">Service</Link></li>
                    </ul>

                </div>
            </header>

            <figure>
                <div className="inner">
                    <p>설문조사를 시작하는 가장 쉬운 방법</p>
                    <p>지금 바로 "Sulf"</p>
                </div>
            </figure>

            <nav>
                <div className="inner">
                    <ul id="gnb">
                        <li><Link to="/howtouse">사이트 안내</Link></li>
                        <li className="border"></li>
                        <li><Link to="#">분류</Link></li>
                        <li className="border"></li>
                        <li><Link to="#">설문 등록</Link></li>
                        <li className="border"></li>
                        <li><Link to="#">마이페이지</Link></li>
                    </ul>
                </div>
            </nav>

            <section>
                <div className="inner">
                    <div className="box">
                        <img src="img/top3.png"></img>
                        <p>Top3</p>
                    </div>

                    <div className="wrapper">
                        <div className="item">
                            <div className="title">설문제목</div>
                        </div>
                        <div className="item">
                            <div className="title">설문제목</div>
                        </div>
                        <div className="item">
                            <div className="title">설문제목</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
