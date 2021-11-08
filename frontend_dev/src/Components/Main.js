// 메인 페이지 

import React from 'react'

/* 컴포넌트 연결 */
import './styles/Main.css';

const Main = () => {
    return (
        <div className="root">

            <header>
                <div class="inner">
                    <div class="logo">
                        <h1><a href="#">Sulf</a></h1>
                    </div>

                    <ul class="util">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="signup.html">Join</a></li>
                        <li><a href="aboutus.html">About us</a></li>
                        <li><a href="#">Service</a></li>
                    </ul>

                </div>
            </header>

            <figure>
                <div class="inner">
                    <p>
                        하나하나 찾아가 부탁하는 설문 멈춰!<br />
                        너도 하고 나도 하고 우리 함께 Sulf!
                    </p>
                </div>
            </figure>

            <nav>
                <div class="inner">
                    <ul id="gnb">
                        <li class="item"><a href="howtouse.html">사이트 안내</a></li>
                        <li class="border"></li>
                        <li class="item"><a href="#">분류</a></li>
                        <li class="border"></li>
                        <li class="item"><a href="#">마이페이지</a></li>
                    </ul>
                </div>
            </nav>

            <section>
                <div class="inner">
                    <div class="box">Top3</div>
                    <div class="wrapper">
                        <div class="item"></div>
                        <div class="item"></div>
                        <div class="item"></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
