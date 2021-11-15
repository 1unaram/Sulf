/* 메인 페이지  */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Main.css';

const Main = () => {
    return (
        <div className="main">

            <header>
                <div className="inner">

                    <div className="logo">
                        <h1><Link to="/">Sulf</Link></h1>
                    </div>

                    <ul className="util">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/aboutus">About us</Link></li>
                        <li><Link to="#">Service</Link></li>
                    </ul>

                </div>
            </header>

            <figure>
                <div className="inner">
                    <p>
                        하나하나 찾아가 부탁하는 설문 멈춰!<br />
                        나도 하고 너도 하고 우리 함께 "Sulf"
                    </p>
                </div>
            </figure>

            <nav>
                <div className="inner">
                    <ul id="gnb">
                        <li><Link to="#">사이트 안내</Link></li>
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
                    <div className="box">Top3</div>

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
