/* 설문 등록 */

import React from 'react'

// 컴포넌트 연결
import style from './styles/PostSurvey.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Postsurvey = () => {
    return (
        <div className={style.postsurvey}>

            <PageHeader
                title="설문 등록"
                titleDestination="Post Survey"
                util={["Home", "My Page", "About us", "Service"]}
                isLogo={false}
            />

            <form className={style.container}>
                <input className={style.inputBox} placeholder="설문 제목을 입력해주세요." />
                <input className={style.inputBox} placeholder="설문 분류를 선택해주세요." />
                <input className={style.inputBox} placeholder="설문 대상을 입력해주세요." />
                <label>
                    설문 기간을 입력해주세요.<br />
                    <input className={style.inputBox} type="date" />
                </label>
                <input className={style.inputBox} placeholder="설문 소개를 입력해주세요." />
                <input className={style.inputBox} placeholder="설문 링크를 입력해주세요." />
                <input type="submit" value="등록" className={style.submitBtn} />
            </form>

        </div>
    )
}

export default Postsurvey
