/* 설문조사 단일 포스트 */
import React from 'react'
import { useLocation } from 'react-router';

// 컴포넌트 연결
import style from './styles/Post.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Post = () => {

    const postInfo = useLocation();

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

                <div className={style.titleBox}>{postInfo.state.title}</div>
                <div className={style.idBox}>{postInfo.state.id}</div>
                <hr />
                <div className={style.targetBox}>{postInfo.state.target}</div>
                <div className={style.periodBox}>{postInfo.state.deadline}</div>
                <div className={style.descriptionBox}>{postInfo.state.description}</div>
                <div className={style.urlBox}>{postInfo.state.url}</div>
            </div>
        </div>
    )
}

export default Post
