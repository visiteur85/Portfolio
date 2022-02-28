import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./main/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./MyWorks/Works";







//https://www.youtube.com/watch?v=VcvIVZGQTPw 1 27 02
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
        {/*<Header language={language}/>*/}
        <div>

        </div>
{/*<button onClick={changeHandler}>x</button>*/}
    </div>
  );
}

export default App;
