import React from 'react';
import s from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">ГЛАВНАЯ</a>
            <a href="">СКИЛЛЫ</a>
            <a href="">ПРОЕКТЫ</a>
            <a href="">КОНТАКТЫ</a>

        </div>
    );
};

