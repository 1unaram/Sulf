/* 서비스 */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Service.css';
import './styles/Total.css';

const Service = () => {
    return (
        <div className="service">

            <header>
                <div className="inner">
                    <div className="logo"><Link to="/service">Service</Link></div>

                    <ul className="util">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/aboutus">Aboutus</Link></li>
                    </ul>
                </div>
            </header>

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
