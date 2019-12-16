import React from 'react';
import s from './header.module.css';
import icon from './puzzle-piece.svg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src={icon} alt="logo" />
                <div className={s.loginBlock}>
                    <img src={props.photos}/>
                    <div>
                        {props.isAuth
                            ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                            : <NavLink to={'/login'}>Login</NavLink>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
