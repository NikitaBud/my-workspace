import React from 'react';
import foto from "../foto1.JPG";
import s from './propfile-info.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img src={foto} alt="bild"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;