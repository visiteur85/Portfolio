import React from 'react';
import s from "./Title.module.scss";


type TitlePropsType = {
    nameOfTitle: string
}

export const Title = (props: TitlePropsType) => {


    return (

        <div className={s.title}>
            <h2>{props.nameOfTitle}</h2>
        </div>

    );
};

