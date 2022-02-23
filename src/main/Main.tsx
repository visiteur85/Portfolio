import React from 'react';
import s from "./Main.module.css";
import styleContainer from "./../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.someText}>
                    <span>Hi</span>
                    <h1>I'm steve milner</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.picture}></div>
            </div>
        </div>
    );
};

