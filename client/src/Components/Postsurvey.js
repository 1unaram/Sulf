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
        category: "",
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
    const fetchPost = (e) => {
        e.preventDefault();
        // fetch("http://localhost:8080/sendPost", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         title: title,
        //         category: category,
        //         target: target,
        //         deadline: deadline,
        //         description: description,
        //         url: url,
        //     }),
        // }).then((res) => {
        //     if (res.ok) {
        //         console.log("완료")
        //     } else {
        //         console.log("실패")
        //     }
        // }).then(console.log("hi))"))

        axios.post("http://localhost:8080/sendPost", {
            title: postData.title,
            category: postData.category,
            target: postData.target,
            deadline: postData.deadline,
            description: postData.description,
            url: postData.url,
        }).then(res => console(res.data));

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
