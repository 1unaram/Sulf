/* #페이지 헤더 */

import React from 'react';
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/PageHeader.module.css';

const PageHeader = (
    {
        isLogo,
        title,
        titleDestination,
        util,
    }) => {

    const destination = {
        "Home": "/",
        "Login": "/login",
        "My Page": "/mypage",
        "About us": "/aboutus",
        "Service": "/service",
        "How to use": "/howtouse",
        "Post Survey": "/postsurvey",
    };

    return (
        <header className={style.pageheader}>
            <div className={style.inner}>

                {isLogo ?
                    <div className={style.logo}>
                        <Link to="/"><img src="img/logo1.png" alt="main_logo"></img></Link>
                    </div>
                    :
                    <div className={style.title}>
                        <Link to={destination[titleDestination]}>
                            {title}
                        </Link>
                    </div>
                }

                <ul className={style.util}>
                    {util.map((item, index) => (
                        <li key={index}>
                            <Link to={destination[item]}>{item}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </header >
    )
}

export default PageHeader
