/* 메인 페이지  */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import PageHeader from '../DetailedComponents/PageHeader';
import PostBox from '../DetailedComponents/PostBox';
import style from './styles/Main.module.css';

const Main = () => {

    // loading 처리
    const [loading, setLoading] = useState(true);

    // 조회수에 의한 Top3를 위한 객체 배열 정렬
    const [sortedByViews, setSortedByViews] = useState([]);
    const sortByViews = (posts) => {
        setSortedByViews(posts.sort((a, b) => {
            return b.views - a.views;
        }));
        setLoading(false);
    };

    // 서버로부터 설문 받아오기
    const [postInfos, setPostInfos] = useState([]);
    const callPost = async () => {
        setLoading(true)
        await axios.get("/postReq")
            .then((res) => {
                setPostInfos(res.data.data);
            })
            .then(setLoading(false));
    };

    // body overflow 설정
    const setOverflow = () => {
        document.querySelector('body').style.overflow = "inherit";
    }

    useEffect(() => {
        callPost();
        setOverflow();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        sortByViews(postInfos);
    }, [postInfos])

    return (
        <div className={style.main}>

            <PageHeader
                isLogo={true}
                titleDestination="Main"
                util={["Login", "About us", "Service"]}
            />

            <figure>
                <span className={style.inner}>
                    <span>설문조사를 시작하는 가장 쉬운 방법</span>
                    <span>지금 바로 <span>"Sulf"</span></span>
                </span>
            </figure>

            <nav>
                <div className={style.inner}>
                    <ul className={style.gnb}>
                        <li><Link to="/main">사이트 안내</Link></li>
                        <li><Link to="/classification">분류</Link></li>
                        <li><Link to="/postsurvey">설문 등록</Link></li>
                        <li><Link to="/main">마이페이지</Link></li>
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
                        {
                            loading || (sortedByViews.length === 0) ?
                                "loading..."
                                :
                                [...Array(3)].map((n, index) => (
                                    <PostBox
                                        key={sortedByViews[index].id}
                                        postInfo={sortedByViews[index]}
                                    />
                                ))
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
