/* 사이트, 개발자 소개 */

import React from 'react'
// import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Aboutus.css';
import './styles/Total.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Aboutus = () => {
    return (
        <div className="aboutus">

            <PageHeader
                title="About us"
                titleDestination="About us"
                util={["Home", "My Page", "Service"]}
                isLogo={false}
            />

            <section className="goal">
                <div className="box1">
                    <p>사이트 목표</p>
                </div>

                <div className="box2">
                    <p>
                        부탁받고, 부탁하는 설문조사는 이렇게나 많은데!<br />
                        왜 우리는 모두 한 명 한 명에게 부탁을 해야 하는걸까?<br />
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
