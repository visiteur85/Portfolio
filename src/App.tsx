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



// https://www.youtube.com/watch?v=3wTuWyNwFOU 00:27
function App() {



  return (
    <div className="App">
        <Header/>
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
