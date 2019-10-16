import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import Profile from './components/profile/profile';
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import './App.css';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={ () => (
                               <DialogsContainer />
                           )}/>
                    <Route path='/profile'
                           render={ () => (
                             <Profile />
                           )}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
