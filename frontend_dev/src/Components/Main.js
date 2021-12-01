/* 메인 페이지  */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Main.css';
import './styles/Total.css';
import PageHeader from '../DetailedComponents/PageHeader.js';
import PostBox from '../DetailedComponents/PostBox';

const Main = () => {
    return (
        <div className="main">

            <PageHeader
                isLogo={true}
                titleDestination="Main"
                util={["Login", "About us", "Service"]}
            />

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
                        <li><Link to="/classification">분류</Link></li>
                        <li><Link to="/postsurvey">설문 등록</Link></li>
                        <li><Link to="/">마이페이지</Link></li>
                    </ul>
                </div>
            </nav>

            <section>
                <div className="inner">
                    <div className="box">
                        <img src="img/top3.png" alt="top3"></img>
                        <p>Top3</p>
                    </div>

                    <div className="wrapper">
                        <PostBox />
                        <PostBox />
                        <PostBox />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
