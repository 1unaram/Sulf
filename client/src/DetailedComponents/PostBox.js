/* 설문 포스트 박스 */

import React from 'react';
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/PostBox.module.css';

const PostBox = ({ postInfo }) => {

    return (
        <div className={style.postbox}>
            <Link
                to={`/post?id=${postInfo.id}`}
                state={postInfo}
            >
                <div className={style.container}>
                    <div className={style.title}>{postInfo ? postInfo.title : "loading..."}</div>

                    <img className={style.icon} src={`img/classification/${postInfo.category}.png`} alt="category icon"></img>
                </div>
            </Link>
        </div>
    )

}

export default PostBox
