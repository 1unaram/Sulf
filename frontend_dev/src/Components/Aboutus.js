/* 사이트, 개발자 소개 */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Aboutus.css';
import './styles/Total.css';

const Aboutus = () => {
    return (
        <div className="aboutus">

            <header>
                <div className="inner">
                    <div className="logo"><Link to="/aboutus">About us</Link></div>

                    <ul className="util">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/service">Service</Link></li>
                    </ul>
                </div>
            </header>

            <section className="goal">
                <div className="box1">
                    <p>사이트 목표</p>
                </div>

                <div className="box2">
                    <p>
                        "더 이상의 먹튀는 없다!"<br />
                        대학 생활을 하며 여러 설문 조사들을 부탁받은, 부탁한 경험도 많았다.<br />
                        그것이 선순환 시스템의 구축을 목표로 한 "Sulf"의 시작이다.
                    </p>
                </div>
            </section>

            <section className="introduction">
                <div className="box1">
                    <p>개발자 소개</p>
                </div>

                <ul className="box2">
                    <li className="developer">
                        <div className="photo"></div>
                        <div className="state"></div>
                    </li>
                    <li className="developer">
                        <div className="photo"></div>
                        <div className="state"></div>
                    </li>
                    <li className="developer">
                        <div className="photo"></div>
                        <div className="state"></div>
                    </li>
                </ul>
            </section>

        </div>
    )
}

export default Aboutus
