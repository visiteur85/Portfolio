import React from 'react';
import s from "./Works.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Work} from "./Work/Work";
import {v1} from "uuid";
// import {Skill} from "./Skill/Skill";
// https://www.youtube.com/watch?v=3wTuWyNwFOU&t=1s  остановились на 55:00 шрифты

export const Works = () => {

    let myWorks = [
        {id: v1(), title: "Називание проекта1", description: "Краткое описание1"},
        {id: v1(), title: "Називание проекта2", description: "Краткое описание2"},
    ]
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <div className={s.title}>
                    <h2 >My Works</h2></div>

                <div className={s.works}>
                    {myWorks.map(m =>
                        <Work
                            key={m.id}
                            title={m.title}
                            description={m.description}

                        />)}


                </div>

            </div>

        </div>
    );
};

