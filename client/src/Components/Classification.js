/* 설문 분류 페이지 */

import React, { useEffect, useState } from 'react';
import axios from "axios";

// 컴포넌트 연결
import style from './styles/Classification.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';
import PostBox from '../DetailedComponents/PostBox';

const Classification = () => {

    // 서버로부터 설문 조사 정보 받아오기
    const [postInfo, setPostInfo] = useState([]);
    const callPost = async () => {
        await axios.get("/postReq").then((res) => {
            setPostInfo(res.data.data);
        })
    }
    useEffect(() => {
        callPost();
    }, []);

    // 검색 기능 구현
    const [serchField, setSerchField] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);
    useEffect(() => {
        setFilteredPosts(() =>
            postInfo.filter((post) => post.description.toLowerCase().includes(serchField.toLowerCase()))
        );
    }, [serchField, postInfo]);

    return (
        <div className={style.classfication}>
            <PageHeader
                isLogo={true}
                titleDestination="Classification "
                util={["Home", "My Page", "About us", "Service"]}
            />

            <div className={style.serchContainer}>
                <input
                    className={style.inputBox}
                    type="text"
                    placeholder="제목 키워드"
                    onChange={(e) => setSerchField(e.target.value)} />
                <button className={style.btn}>검색</button>
            </div>

            <ul className={style.list}>
                <li className={style.item}><p>전체</p></li>
                <li className={style.item}><p>사회</p></li>
                <li className={style.item}><p>자연</p></li>
                <li className={style.item}><p>예술</p></li>
                <li className={style.item}><p>기타</p></li>
            </ul>

            <section className={style.postboxContainer}>
                <div className={style.iconWrapper}>
                    <div><img src="img/popular.png" alt="popular_png" />인기</div>
                    <div><img src="img/recent.png" alt="recent_png" />최신</div>
                </div>

                <div className={style.postWrapper}>
                    {(serchField ?
                        filteredPosts
                        :
                        postInfo).map((post) => (
                            <PostBox
                                key={post.id}
                                postInfo={post}
                                className={style.postbox}
                            />
                        ))}
                </div>
            </section>
        </div >
    )
}

export default Classification
