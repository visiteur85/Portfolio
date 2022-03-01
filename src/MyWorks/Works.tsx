import React from 'react';
import s from "./Works.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Work} from "./Work/Work";
// import {Skill} from "./Skill/Skill";

export const Works = () => {
    return (
        <div className={s.worksBlock}>
            <div className= {`${styleContainer.container} ${s.worksContainer}`} >
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work/>
                    <Work/>

                </div>

            </div>
            
        </div>
    );
};

