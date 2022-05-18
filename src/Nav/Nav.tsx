import React from 'react';
import s from "./Nav.module.css"
import {languages} from "../langueges";
//7. получаю из компоненты хеадер значение языка
type PropsType = {
    language:string
}

export const Nav = (props:PropsType) => {
    return (
        <div className={s.nav}>
            {/*//8.если значение языка "английский", то берем значения из файла , где хранится объект с ключами*/}
            {/*// для двух языков*/}
            {props.language === "english" ? languages.english.main :
                languages.russian.main}
            <a href="">ГЛАВНАЯ</a>
            <a href="">СКИЛЛЫ</a>
            <a href="">ПРОЕКТЫ</a>
            <a href="">КОНТАКТЫ</a>

        </div>
    );
};

