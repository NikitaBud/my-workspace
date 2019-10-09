import React from 'react';
import s from './dialog-item.module.css';
import ava from '../../../redux/avatar/alien-2.png';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={ava} alt="avatar" />
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};

export default DialogItem;