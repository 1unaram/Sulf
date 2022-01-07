/* 설문 분류 페이지 */

import React, { useEffect, useState } from 'react';
import axios from "axios";

// 컴포넌트 연결
import style from './styles/Classification.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';
import PostBox from '../DetailedComponents/PostBox';

const Classification = () => {

    // loading 처리
    const [loading, setLoading] = useState(true);

    // 정렬 배열
    // const [sortedByRecent, setSortedByRecent] = useState([])
    // const [sortedByViews, setSortedByViews] = useState([])

    // 서버로부터 설문 조사 정보 받아오기
    const [postInfo, setPostInfo] = useState([]);
    const callPost = async () => {
        await axios.get("/postReq").then((res) => {
            setPostInfo(res.data.data.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            }));
        })
            // .then(setSortedByRecent(postInfo))
            .then(setLoading(false));
    }
    useEffect(() => {
        callPost();
    }, []);

    // 검색 기능
    const [serchField, setSerchField] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);
    useEffect(() => {
        setFilteredPosts(() =>
            postInfo.filter((post) => post.description.toLowerCase().includes(serchField.toLowerCase()))
        );
        setFilteredPosts(() =>
            postInfo.filter((post) => post.title.toLowerCase().includes(serchField.toLowerCase()))
        );
    }, [serchField, postInfo]);

    // 카테고리 선택
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [prevCat, setPrevCat] = useState("all");
    const selectCat = (e) => {
        setSelectedCategory(e.target.id);
    };
    useEffect(() => {
        selectedCategory === "all" ?
            setPrevCat("all") ||
            setFilteredPosts(postInfo)
            :
            setPrevCat(selectedCategory) ||
            setFilteredPosts(() =>
                postInfo.filter((post) => post.category.toLowerCase().includes(selectedCategory.toLowerCase()))
            );
    }, [selectedCategory, postInfo]);

    // 카테고리 선택에 따른 스타일 변경
    const changeBorder = () => {
        document.getElementById(prevCat).parentNode.style.border = "none";
        document.getElementById(prevCat).parentNode.style.borderLeft = "0.5px solid black";
        document.getElementById(prevCat).parentNode.style.borderRight = "0.5px solid black";
        document.getElementById(selectedCategory).parentNode.style.border = "4px solid black";
    }
    useEffect(() => {
        changeBorder()
        // eslint-disable-next-line
    }, [selectedCategory])


    // // 인기 최신 정렬
    // const [sortedPosts, setSortedPosts] = useState([]);
    // const [sortedBy, setSortedBy] = useState("recent");
    const selectSortBy = (e) => {
        //     setSortedBy(e.target);
        //     console.log(sortedBy)
        //     sortedBy === "recent" ?
        //         // setSortedPosts(sortedByRecent)
        //         console.log("최신순")
        //         :
        //         // setSortedPosts(sortedByViews);
        //         console.log("인기순")
        //     console.log(sortedPosts);
    };
    // useEffect(() => {
    //     setSortedByViews(postInfo.sort((a, b) => {
    //         return b.views - a.views;
    //     }))
    // }, [loading, postInfo])

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
                <li className={style.item}><p onClick={selectCat} id="all">전체</p></li>
                <li className={style.item}><p onClick={selectCat} id="social">사회</p></li>
                <li className={style.item}><p onClick={selectCat} id="nature">자연</p></li>
                <li className={style.item}><p onClick={selectCat} id="art">예술</p></li>
                <li className={style.item}><p onClick={selectCat} id="etc">기타</p></li>
            </ul>

            <section className={style.postboxContainer}>
                <div className={style.iconWrapper}>
                    <div className={style.sortBy} onClick={selectSortBy} id="popular"><img src="img/popular.png" alt="popular_png" />인기</div>
                    <div className={style.sortBy} onClick={selectSortBy} id="recent"><img src="img/recent.png" alt="recent_png" />최신</div>
                </div>

                <div className={style.postWrapper}>
                    <div className={style.inner}>
                        {loading || (postInfo.length === 0) ?
                            "loading..."
                            :
                            (serchField || selectedCategory ?
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
                </div>
            </section>
        </div >
    )
}

export default Classification
