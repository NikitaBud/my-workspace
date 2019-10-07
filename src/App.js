import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import './App.css';


const App = (props) => {
    console.log(props);
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={ () => (
                             <Dialogs
                                 state={props.state.dialogsPage} />
                           )} />
                    <Route path='/profile'
                           render={ () => (
                             <Profile
                                 state={props.state.profilePage}
                                 addPost={props.addPost}
                                 updateNewPostText={props.updateNewPostText}
                             />
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
