import React from 'react';
import s from "./Skills.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className= {`${styleContainer.container} ${s.skillsContainer}`} >
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"Js"} description={"sadfasdfsa fsafaswes dafasdfsadsadf safsadf"}/>
                    <Skill title={"HTML"} description={"qwr tfgsfbhghs dfgsdfgbaasd fasdf"}/>
                    <Skill title={"CSS"} description={"wetyyrj ugkdfgsdf gsdfggnrty sfgsfgasdfsadfasd fsadfasdfsadf"}/>






                </div>

            </div>
            
        </div>
    );
};

