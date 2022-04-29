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



// https://www.youtube.com/watch?v=3wTuWyNwFOU 00:13
function App() {

    //for multi languages
//     let [language, setlangeage] = useState(languages.russian)
//
// const changeHandler = () => {
//     language === languages.russian ? setlangeage(languages.english) : setlangeage(languages.russia!!!!!! )
//
//
// }

  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Works/>
        <Job/>
        <Contacts/>
        <Footer/>
        {/*<Header language={language}/>*/}

{/*<button onClick={changeHandler}>x</button>*/}
    </div>
  );
}

export default App;
