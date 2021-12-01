/* 설문조사 단일 포스트 */
import React from 'react'

// 컴포넌트 연결
import style from './styles/Post.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Post = () => {
    return (
        <div className={style.post}>
            <PageHeader
                title="설문 등록"
                titleDestination="Post Survey"
                util={["Home", "Login", "About us", "Service"]}
                isLogo={true}
            />

            <div className={style.container}>

                <img src="img/back.png" alt="back_png"></img>
                <div className={style.titleBox}>설문 제목</div>
                <div className={style.idBox}>아이디</div>
                <hr />
                <div className={style.targetBox}>대상</div>
                <div className={style.periodBox}>기간</div>
                <div className={style.descriptionBox}>설명</div>
                <div className={style.urlBox}>url</div>

            </div>
        </div>
    )
}

export default Post
