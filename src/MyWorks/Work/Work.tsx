import React from 'react';
import s from "./Work.module.scss"
import socialImage from "../../assets/images/social_media.jpg";

type PropsType = {
    title: string
    description: string
    imgUrl: string
}

export const Work = (props: PropsType) => {
    return (
        <div className={s.work}>
            <div className={s.image} style={{
                backgroundImage: `${props.imgUrl}`
            }
            }>
                <a className={s.viewBtn}>Смотреть</a>
            </div>
            <div className={s.projectDescription}>
                <h3 className={s.workTitle}>{props.title}</h3>
                <p className={s.descrWork}>{props.description}</p>
            </div>

        </div>
    );
};

