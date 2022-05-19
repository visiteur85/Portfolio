import React from 'react';
import s from "./Header.module.css"
import {Nav} from "../Nav/Nav";
import {LenguagesType} from "../App";


//4. получаю из апп коллбэк и значение стэйта локального
type PropsType = {
    // changeLanguage:(lang:LenguagesType)=>void
    // language:string
}

export const Header = (props:PropsType) => {



    return (
        <div className={s.header}>
            {/*5. вешаю на кнопку событие, благодаря которому, получаю новое значение для моего стэйта,*/}
            {/*если нажата кнопка инглиш, то наверх улетит в коллбэк параметра, который и станет значением стэйта*/}
            {/*<button onClick={()=>props.changeLanguage("english")}>English</button>*/}
            {/*<button onClick={()=>props.changeLanguage("russian")}>Русский</button>*/}
            {/*6. прокидываю в компоненту значение стэйта из апп*/}
<Nav
    // language={props.language}
/>


        </div>
    );
};

