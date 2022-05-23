import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./main/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./MyWorks/Works";
import {Job} from "./Job/Job";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./footer/Footer";


// https://themeforest.net/item/tunis-personal-portfolio/26761598


// https://www.youtube.com/watch?v=3wTuWyNwFOU 2:13

export type LenguagesType = "russian" | "english";
function App() {
//     //1.создаю локальный стэйт, значение по умолчанию русский
// let [language, setLanguage] = useState<LenguagesType>("russian");
// //2. создаю функцию, которая меняет этот стэйт в зависимсоти от входящего параметра
// const changeLanguage = (lang:LenguagesType) => {
//   setLanguage(lang)
// }

    return (
        <div className="App">
            {/*3.передаю значение стэйта ниже по дереву + коллбэк,
            который вернет мне параметра для функции,*
            кг*которая меняет локальный стэйт*/}
            <Header
                // language={language} changeLanguage={changeLanguage}
            />
            <Main/>
            <Skills/>
            <Works/>
            <Job/>
            <Contacts/>
            <Footer/>


        </div>
    );
}

export default App;
