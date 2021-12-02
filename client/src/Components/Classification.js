/* 설문 분류 페이지 */

import React from 'react'

// 컴포넌트 연결
import style from './styles/Classification.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';
import PostBox from '../DetailedComponents/PostBox';

const Classification = () => {
    return (
        <div className={style.classfication}>
            <PageHeader
                isLogo={true}
                titleDestination="Classification "
                util={["Home", "My Page", "About us", "Service"]}
            />

            <form className={style.serchContainer}>
                <input className={style.inputBox} type="text" placeholder="제목 키워드" />
                <input className={style.submitBtn} type="submit" value="검색" />
            </form>

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
                    <PostBox />
                    <PostBox />
                    <PostBox />
                </div>
            </section>
        </div >
    )
}

export default Classification
