/* 사이트 이용 방법 */

import React from 'react'
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import './styles/Howtouse.css';
import './styles/Total.css';

const Howtouse = () => {
    return (
        <div className="howtouse">

            <header>
                <div class="item"><a href="#">사이트 이용 방법</a></div>
            </header>

            <section>
                <div class="box">
                    <span class="item">1. 설문조사를 부탁할 일이 생겼다!</span>
                    <span class="item">2. Sulf에 들어와 설문 조사를 3개 이상 완료한다.</span>
                    <span class="item">3. 설문 조사를 완료할 때마다 콩을 부여받는다.</span>
                    <span class="item">4. 부여받은 콩으로 설문 대상과 기간을 포함하여 본인의 설문 조사를 올린다.</span>
                    <span class="item">5. 설문 조사 걱정 끝~!</span>
                </div>
            </section>

        </div>
    )
}

export default Howtouse
