/* 설문조사 단일 포스트 */
import React from 'react'
import { useLocation, useNavigate } from 'react-router';

// 컴포넌트 연결
import style from './styles/Post.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Post = () => {

    // 설문 정보 받아오기
    const postInfo = useLocation();

    // 뒤로가기를 위한 hooks
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    // 카테고리
    const cate = {
        social: "사회",
        nature: "자연",
        art: "예술",
        etc: "기타"
    }

    return (
        <div className={style.post}>
            <PageHeader
                title="설문 등록"
                titleDestination="Post Survey"
                util={["Home", "Login", "About us", "Service"]}
                isLogo={true}
            />

            <div className={style.container}>

                <img src="img/back.png" alt="back_png" onClick={goBack}></img>

                <p className={style.titleBox}><p>{postInfo.state.title}</p></p>
                <p className={style.deadlineBox}>
                    기간 :<p>{postInfo.state.deadline}</p>까지
                </p>
                <hr />
                <p className={style.urlBox}>
                    <p>설문 링크 :</p>
                    <a href={postInfo.state.url} target='_blank' rel="noreferrer" >{postInfo.state.url}</a>
                </p>
                <div className={style.inner}>
                    <p className={style.category}>
                        분류 :<p>{cate[postInfo.state.category]}</p>
                    </p>
                    <img src={`img/classification/${postInfo.state.category}.png`} alt="category_png"/>
                </div>
                <p className={style.targetBox}>
                    대상 :<p>{postInfo.state.target}</p>
                </p>
                <p className={style.descriptionBox}>{postInfo.state.description}</p>
            </div>
        </div>
    )
}

export default Post
