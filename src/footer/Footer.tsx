import React from 'react';
import s from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footBlock}>
            <div className={styleContainer.container}>
               <div className={s.forms}>
                   <h2 className={s.title}>Павел Кривальцевич</h2>
                 <div className={s.footerData}>
                   <div className={s.footerSmallBlocks}></div>
                   <div className={s.footerSmallBlocks}></div>
                   <div className={s.footerSmallBlocks}></div>
                   <div className={s.footerSmallBlocks}></div>
                 </div>
                   <div>2022 Все права защищены</div>
                       {/*</div>*/}

               </div>

            </div>

        </div>
    );
};

