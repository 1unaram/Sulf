/* 설문 포스트 박스 */

import React, { useEffect, useState } from 'react';
import axios from "axios";

// 컴포넌트 연결
import style from './styles/PostBox.module.css';

const PostBox = () => {
    const [loading, setLoading] = useState(true);   // 데이터 로딩 처리
    const [postInfo, setPostInfo] = useState([]);

    const callPost = async () => {
        axios.get("/api").then((res) => {
            setPostInfo(res.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        callPost();
    }, []);

    return (
        <div className={style.postbox}>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div className={style.title}>{postInfo[0].title}</div>
            )}
        </div>
    )
}

export default PostBox
