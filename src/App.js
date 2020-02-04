import React, { Component } from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import DialogsContainer from "./components/dialogs/dialogs-container";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import './App.css';
import UsersContainer from "./components/users/users-container";
import ProfileContainer from "./components/profile/profile-container";
import HeaderContainer from "./components/header/header-container";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Spinner from "./utilities/loader/spinner";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Spinner/>
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path='/dialogs'
                               render={() => (
                                   <DialogsContainer/>
                               )}/>
                        <Route path='/profile/:userId?'
                               render={() => (
                                   <ProfileContainer/>
                               )}/>
                        <Route path='/users'
                               render={() => (
                                   <UsersContainer/>
                               )}/>
                        <Route path='/login'
                               render={() => (
                                   <Login/>
                               )}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
