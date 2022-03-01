import React from 'react';
import s from "./Job.module.css";
import styleContainer from "./../common/styles/Container.module.css"

export const Job = () => {
    return (
        <div className={s.jobBlock}>
            <div className={`${styleContainer.container} ${s.addFlex}`}>
                <div className={s.jobMain}>
                    <h2>Рассматриваю варианты удаленной работы</h2>
                    <button>Нанять меня</button>
                </div>

            </div>
        </div>
    );
};

