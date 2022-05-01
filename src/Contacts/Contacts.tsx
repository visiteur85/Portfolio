import React from 'react';
import s from "./Contact.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contBlock}>
            <div className={`${styleContainer.container} ${s.conContainer}`}>
                    <h2 className={s.title}>Контакты</h2>
                    <form className={s.forms}>
                        <input className={s.widthForms} type="text"/>
                        <input className={s.widthForms} type="text"/>
                        <textarea className={s.widthForms} name="" id=""></textarea>
                        <button type={"submit"} className={s.subBut}>Отправить</button>
                    </form>



                </div>



        </div>
    );
};
