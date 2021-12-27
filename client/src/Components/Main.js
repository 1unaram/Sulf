/* 메인 페이지  */

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import PageHeader from '../DetailedComponents/PageHeader.js';
import PostBox from '../DetailedComponents/PostBox';
import style from './styles/Main.module.css';


const Main = () => {

    const [postInfo, setPostInfo] = useState([]);

    const callPost = async () => {
        axios.get("/postReq").then((res) => {
            setPostInfo(res.data.data);
        })
    }

    useEffect(() => {
        callPost();
    }, []);

    return (
        <div className={style.main}>

            <PageHeader
                isLogo={true}
                titleDestination="Main"
                util={["Login", "About us", "Service"]}
            />

            <figure>
                <div className={style.inner}>
                    <p>설문조사를 시작하는 가장 쉬운 방법</p>
                    <p>지금 바로 "Sulf"</p>
                </div>
            </figure>

            <nav>
                <div className={style.inner}>
                    <ul className={style.gnb}>
                        <li><Link to="/howtouse">사이트 안내</Link></li>
                        <li><Link to="/classification">분류</Link></li>
                        <li><Link to="/postsurvey">설문 등록</Link></li>
                        <li><Link to="/">마이페이지</Link></li>
                    </ul>
                </div>
            </nav>

            <section>
                <div className={style.inner}>
                    <div className={style.box}>
                        <img src="img/top3.png" alt="top3"></img>
                        <p>Top3</p>
                    </div>

                    <div className={style.wrapper}>
                        {postInfo.map((post) => (
                            <PostBox
                                key={post.id}
                                postInfo = {post}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
