/* 설문조사 단일 포스트 */
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

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

    // 조회수 증가를 위한 통신
    const countupViews = async () => {
        await axios.post("/countupViews", {
            id: postInfo.state.id,
            views: postInfo.state.views,
        });
    };

    useEffect(() => {
        countupViews();
        // eslint-disable-next-line
    }, [postInfo])

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

                <div className={style.titleBox}><p>{postInfo.state.title}</p></div>

                <div className={style.wrapper1}>
                    <div className={style.dateBox}>
                        등록 날짜 : <p>{postInfo.state.date.slice(0, 10) + ", " + postInfo.state.date.slice(11, 19)}</p>
                    </div>
                    <div className={style.viewsBox}>
                        조회수 : <p>{postInfo.state.views}</p>
                    </div>
                </div>

                <div className={style.deadlineBox}>
                    기간 :<p>{postInfo.state.deadline}</p>까지
                </div>
                <hr />
                <div className={style.urlBox}>
                    <p>설문 링크 :</p>
                    <a href={postInfo.state.url} target='_blank' rel="noreferrer" >{postInfo.state.url}</a>
                </div>
                <div className={style.wrapper2}>
                    <div className={style.category}>
                        분류 :<p>{cate[postInfo.state.category]}</p>
                    </div>
                    <img src={`img/classification/${postInfo.state.category}.png`} alt="category_png" />
                </div>
                <div className={style.targetBox}>
                    대상 :<p>{postInfo.state.target}</p>
                </div>
                <div className={style.descriptionBox}>{postInfo.state.description}</div>
            </div>
        </div>
    )
}

export default Post
