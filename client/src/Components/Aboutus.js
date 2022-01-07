/* 사이트, 개발자 소개 */

import React from 'react'
// import { Link } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/Aboutus.module.css';
import PageHeader from '../DetailedComponents/PageHeader.js';

const Aboutus = () => {
    return (
        <div className={style.aboutus}>

            <PageHeader
                title="About us"
                titleDestination="About us"
                util={["Home", "My Page", "Service"]}
                isLogo={false}
            />

            <section className={style.goal}>
                <div className={style.box1}>
                    <p>사이트 목표</p>
                </div>

                <div className={style.box2}>
                    <p>
                        부탁받고, 부탁하는 설문조사는 이렇게나 많은데!<br />
                        왜 우리는 모두 한 명 한 명에게 부탁을 해야 하는걸까?<br />
                        그것이 선순환 시스템의 구축을 목표로 한 "Sulf"의 시작이다.
                    </p>
                </div>
            </section>

            <section className={style.introduction}>
                <div className={style.box1}>
                    <p>개발자 소감</p>
                </div>

                <ul className={style.box2}>
                    <li className={style.developer}>
                        <img src="img/ram.png" alt="ram_png" className={style.ram}></img>
                        <span className={style.state}>
                            COMP라는 생각하지도 못했던 동아리에서 이렇게 좋은 사람들을 만나고
                            값진 스터디와 프로젝트, 만남을 하게 되어서 진심으로 좋았습니다!
                            부족했던 팀장이었지만 잘 따라와준 윤석이와 지윤이에게 정말 고마워!
                            이렇게 비대면으로 한 해를 마친 것이 너무나도 아쉽지만 앞으로의 날을 기약합니닷!.!
                            1년 동안 고생해주신 운영진 형 누나들에게 감사하고 발표를 들어주신 모든 분들도 감사합니다:D
                        </span>
                    </li>
                    <li className={style.developer}>
                        <img src="img/seok.png" alt="seok_png" className={style.seok}></img>
                        <span className={style.state}>
                            2021년 중앙대학교 새내기 시절 중 가장 후회 없는 일 한 가지를 뽑는다면 COMP에 가입한 것!
                            1년 동안 스터디, 프로젝트를 했던 콤프 35기분들 모두 고생하셨고 우리 3조 SULF 팀원 하람이랑 지윤이도 정말 수고 많았어! 코로나 때문에 대면으로 얼굴조차 못 뵌 분들도 있고 또 동아리 mt도 못 간 게 너무너무 아쉽지만 다음을 기약하며 ..☆
                            아무쪼록 1년 동안 동아리를 위해 힘써주신 운영진 형 누나들도 모두 수고하셨고, 프로젝트를 통해 좋은 경험할 수 있도록 기회를 마련해 주셔서 감사합니다!
                        </span>
                    </li>
                    <li className={style.developer}>
                        <img src="img/yoon.png" alt="yoon_png" className={style.yoon}></img>
                        <span className={style.state}>
                            디자인 일을 처음 맡아보기에 걱정이 앞섰는데, 하람이랑 윤석이 덕분에 잘 마무리했다.
                            대학교 1학년, 가장 잘한 일은 콤프에 들어왔던 일!
                            못 뵌 분들도 많아서 아쉽다. 얼른 상황이 나아져서 뵐 수 있는 기회를 만들고 싶다.
                            그리고 마지막으로 SURF가 잘 되어서 판교에 회사를 계약하고 싶다. 그 꿈이 이루어지는 날까지…!
                            모두 해피뉴이어:)
                        </span>
                    </li>
                </ul>
            </section>

        </div>
    )
}

export default Aboutus
