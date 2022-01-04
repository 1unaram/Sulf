/* 설문 등록 */

import React, { useState } from 'react'

// 컴포넌트 연결
import style from './styles/PostSurvey.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';
import axios from 'axios';

const Postsurvey = () => {

    /* useInput */
    const [postData, setPostData] = useState({
        title: "",
        category: "social",
        target: "",
        deadline: "",
        description: "",
        url: ""
    });
    const handle = (e) => {
        const newdata = { ...postData };
        newdata[e.target.id] = e.target.value;
        setPostData(newdata);
    }

    /* 등록 */
    const fetchPost = async (e) => {
        e.preventDefault();

        const response = await axios.post("/uploadSurvey", {
            title: postData.title,
            category: postData.category,
            target: postData.target,
            deadline: postData.deadline,
            description: postData.description,
            url: postData.url,
        });
        console.log(response.data)

    }

    // useEffect(() => {
    //     fetchPost();
    // }, [])

    return (
        <div className={style.postsurvey}>

            <PageHeader
                title="설문 등록"
                titleDestination="Post Survey"
                util={["Home", "My Page", "About us", "Service"]}
                isLogo={false}
            />

            <form className={style.container} onSubmit={fetchPost}>
                <input className={style.inputBox} id="title" type="text" placeholder="설문 제목을 입력해주세요." onChange={handle} />

                <select id="category" onClick={handle}>
                    <option value="social">사회</option>
                    <option value="nature">자연</option>
                    <option value="art">예술</option>
                    <option value="etc">기타</option>
                </select>

                <input className={style.inputBox} id="target" type="text" placeholder="설문 대상을 입력해주세요." onChange={handle} />

                설문 마감일 선택해주세요<br />
                <input className={style.inputBox} id="deadline" type="date" onChange={handle} />

                <input className={style.inputBox} id="description" type="text" placeholder="설문 소개를 입력해주세요." onChange={handle} />
                <input className={style.inputBox} id="url" type="text" placeholder="설문 링크를 입력해주세요." onChange={handle} />
                <button className={style.submitBtn} type="submit">등록</button>
            </form>

        </div >
    )
}

export default Postsurvey
