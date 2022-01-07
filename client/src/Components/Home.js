/* 홈 */

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/Home.module.css';

const Home = () => {

    useEffect(() => {
        document.querySelector('body').style.overflow = "hidden";
    })

    return (
        <div className={style.home}>

            <div className={style.container}>
                <img className={style.suffer} src="img/logo/suffer.png" alt="suffer_logo" />

                <div className={style.inner}>
                    <p className={style.title}>설문조사를 시작하는<br />가장 쉬운 방법<br />'Survey Life'</p>

                    <img src="img/logo/logo1.png" alt="logo" />

                    <div className={style.linkGroup}>
                        <Link to="/main"><div>블로그로 이동하기</div></Link>
                        <Link to="/main"><div>사이트로 이동하기</div></Link>
                    </div>
                </div>
            </div>

            <div className={style.wrapper}>
                <div className={style.ocean}>
                    <div className={style.wave}></div>
                    <div className={style.wave}></div>
                </div>
            </div>

        </div>
    )
}

export default Home
