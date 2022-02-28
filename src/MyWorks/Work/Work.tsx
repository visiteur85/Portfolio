import React from 'react';
import s from "./Work.module.css"

type PropsType = {
    // title:string
    // description:string
}

export const Work = (props:PropsType) => {
    return (
        <div className={s.work}>
            <div className={s.background}>
                <button>Смотреть</button>
            </div>
            <div className={s.projectDescription}>
                <h3>Название проекта</h3>
                <p> Краткое описание</p>
            </div>



        </div>
    );
};

