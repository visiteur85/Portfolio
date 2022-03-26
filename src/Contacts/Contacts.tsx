import React from 'react';
import s from "./Contact.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contBlock}>
            <div className={styleContainer.container}>
               <div className={s.forms}>
                   <h2 className={s.title}>Контакты</h2>
                   <form className={s.diffForms}>
                        <input className={s.widthForms} type="text"/>
                       <input className={s.widthForms} type="text"/>
                        <textarea className={s.widthForms} name="" id="" ></textarea>
                   </form>
                   {/*<div className={s.diffForms}>*/}
                   {/*    <div> <input className={s.widthForms} type="text"/></div>*/}
                   {/*    <div><input className={s.widthForms} type="text"/></div>*/}
                   {/*    <div> <textarea className={s.widthForms} name="" id="" ></textarea></div>*/}
                   {/*</div>*/}
                   {/*<div>*/}
                   <button>Отправить</button>
                       {/*</div>*/}

               </div>

            </div>

        </div>
    );
};

