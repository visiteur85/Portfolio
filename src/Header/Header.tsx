import React from 'react';
import s from "./Header.module.css"
import {Nav} from "../Nav/Nav";
import {OneLanguageType} from "../langueges";

export type languagesPropsType = {
    language: OneLanguageType
}


export const Header = (props:languagesPropsType) => {



    return (
        <div className={s.header}>
<Nav/>
            {props.language.buy}

        </div>
    );
};

