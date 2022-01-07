/* 확인 창 */
import React from 'react'

// 컴포넌트 연결
import style from './styles/ConfirmModal.module.css';

const ConfirmModal = ({ trigger, setTrigger, setUpload }) => {
    return (trigger) ? (
        <div className={style.confirmmodal}>
            <div className={style.container}>
                <p>정말 등록하시겠습니까?</p>

                <div className={style.btnGroup}>
                    <button onClick={() => {
                        setTrigger(false);
                        setUpload(true);
                    }}>예</button>
                    <button onClick={() => setTrigger(false)}>아니요</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default ConfirmModal
