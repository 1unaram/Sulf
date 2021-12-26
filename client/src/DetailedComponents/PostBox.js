/* 설문 포스트 박스 */

import React from 'react';

// 컴포넌트 연결
import style from './styles/PostBox.module.css';

const PostBox = ({ title, category }) => {

    return (
        <div className={style.postbox}>
            <div className={style.title}>{title}</div>

            <img className={style.icon} src={`img/classification/${category}.png`} alt="category icon"></img>
        </div>
    )

}

export default PostBox
