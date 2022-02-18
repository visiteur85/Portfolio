import React from 'react';
import s from "./Header.module.css"
import {Nav} from "../Nav/Nav";



// export type languagesPropsType = {
//     language:OneLanguageType
// }
// props:languagesPropsType

export const Header = () => {



    return (
        <div className={s.header}>
<Nav/>
            {/*{props.language.buy}*/}

        </div>
    );
};

