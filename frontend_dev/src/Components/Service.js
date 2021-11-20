/* 서비스 */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Service.css';

const Service = () => {
    return (
        <div className="service">

            <header>
                <div className="inner">
                    <div className="logo"><Link to="/aboutus">Service</Link></div>

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
                
                <ul>
                    <li></li>
                </ul>
            </section>

            <section className="qna">
                <div className="box1">
                    <p>Q&A</p>
                </div>
            </section>

        </div>
    )
}

export default Service
