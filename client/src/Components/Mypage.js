/* 마이페이지 */

import React from 'react';

// 컴포넌트 연결
import PageHeader from '../DetailedComponents/PageHeader.js';
import style from './styles/Mypage.module.css';


const Mypage = () => {
    return (
        <div className={style.mypage}>

            <PageHeader
                isLogo={false}
                title="마이페이지"
                titleDestination="My Page"
                util={["Home", "About us", "Service"]}
            />

            <section>
                <div className={style.certification}>
                    <p>인증</p>
                </div>
                <div className={style.container}>
                    <div><img src="img/certification/certification1.png" alt="cert1_png"></img></div>
                    <div><img src="img/certification/certification2.png" alt="cert2_png"></img></div>
                    <div><img src="img/certification/certification3.png" alt="cert3_png"></img></div>
                </div>
            </section>
        </div>
    )
}

export default Mypage
