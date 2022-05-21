import React from 'react';
import s from "./Works.module.css";
import styleContainer from "./../common/styles/Container.module.css"
import {Work} from "./Work/Work";
import {v1} from "uuid";
import {Title} from "../common/components/title/Title";

export const Works = () => {

    // const divStyle = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

    let myWorks = [
        {id: v1(), title: "Name of Project", description: "Краткое описание1"},
        {id: v1(), title: "Name of Project", description: "Краткое описание1  описание1 ssdfwqerwqer"},
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

                        />)}


                </div>

            </div>

        </div>
    );
};

