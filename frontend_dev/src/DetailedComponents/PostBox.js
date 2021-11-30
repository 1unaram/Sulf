/* 설문 포스트 박스 */

import React from 'react'

// 컴포넌트 연결
import style from './styles/PostBox.module.css';

const PostBox = () => {
    return (
        <div className={style.postbox}>
            <div className={style.title}>설문제목</div>
        </div>
    )
}

export default PostBox
