/* 서비스 */

import React from 'react'
// import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Service.css';
import './styles/Total.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Service = () => {
    return (
        <div className="service">

            <PageHeader
                title="Service"
                titleDestination="Service"
                util={["Home", "My Page", "About us"]}
                isLogo={false}
            />

            <section className="faq">
                <div className="box1">
                    <p>FAQ</p>
                </div>

                <ul className="box2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>

            <section className="qna">
                <div className="box1">
                    <p>Q&A</p>
                </div>

                <div className="box2">
                    <textarea className="text"></textarea>

                    <input type="submit" value="등록" className="submit"></input>
                </div>
            </section>

        </div>
    )
}

export default Service
