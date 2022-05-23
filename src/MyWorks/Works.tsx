import React from 'react';
import s from "./Works.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Work} from "./Work/Work";
import {v1} from "uuid";
import {Title} from "../common/components/title/Title";
import todoImage from "./../assets/images/Todo.jpg"
import socialImage from "./../assets/images/social_media.jpg"

export const Works = () => {

    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };

    let myWorks = [
        {id: v1(), title: "Social network", description: "Краткое описание1", image: social.backgroundImage},
        {id: v1(), title: "Todolist", description: "Краткое описание1  описание1 ssdfwqerwqer", image: todo.backgroundImage},
    ]
    return (
        <div className={s.worksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title nameOfTitle={"Projects"}/>

                <div className={s.works}>
                    {myWorks.map(m =>
                        <Work
                            key={m.id}
                            title={m.title}
                            description={m.description}
                            imgUrl={m.image}

                        />)}


                </div>

            </div>

        </div>
    );
};

