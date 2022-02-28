import React from 'react';
import s from "./Skill.module.css"

type PropsType = {
    title:string
    description:string
}

export const Skill = (props:PropsType) => {
    return (
        <div className={s.skill}>
<div className={s.icon}></div>
            <h3 className={s.header}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>

        </div>
    );
};

