import React from 'react';
import s from "./Work.module.css"

type PropsType = {
    title: string
    description: string
}

export const Work = (props: PropsType) => {
    return (
        <div className={s.work}>
            <div className={s.background}>
                <button>Смотреть</button>
            </div>
            <div className={s.projectDescription}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>


        </div>
    );
};

