/* 사이트 이용 방법 */

import React from 'react'

// 컴포넌트 연결
import style from './styles/Howtouse.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Howtouse = () => {
    return (
        <div className={style.howtouse}>

            <PageHeader
                title="Sulf 이용 방법"
                titleDestination="How to use"
                util={["Home", "My Page", "About us", "Service"]}
                isLogo={false}
            />

            <section>
                <div className="box">
                    <span className="item">1. 설문조사를 부탁할 일이 생겼다!</span>
                    <span className="item">2. Sulf에 들어와 설문 조사를 3개 이상 완료한다.</span>
                    <span className="item">3. 설문 조사를 완료할 때마다 콩을 부여받는다.</span>
                    <span className="item">4. 부여받은 콩으로 설문 대상과 기간을 포함하여 본인의 설문 조사를 올린다.</span>
                </div>
            </section>

        </div >
    )
}

export default Howtouse
