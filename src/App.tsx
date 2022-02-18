import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header/Header";







//https://www.youtube.com/watch?v=VcvIVZGQTPw 32:28
function App() {

    //for multi languages
//     let [language, setlangeage] = useState(languages.russian)
//
// const changeHandler = () => {
//     language === languages.russian ? setlangeage(languages.english) : setlangeage(languages.russian)
//
//
// }

  return (
    <div className="App">
        <Header/>
        {/*<Header language={language}/>*/}
        <div>

        </div>
{/*<button onClick={changeHandler}>x</button>*/}
    </div>
  );
}

export default App;
