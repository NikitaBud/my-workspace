import React from 'react';
import foto from "../foto1.JPG";
import dw from './darth-vader.svg'
import on from '../profile-info/on.svg';
import off from '../profile-info/off.svg'
import s from './profile-info.module.css';
import Spinner from "../../../utilities/loader/spinner";
import ProfileStatus from "../profile-status/profile-status";
import Profile from "../profile";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Spinner/>
    }

    return (
        <div>
            <div className={s.item}>
                <img src={foto} alt="bild"/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.ava} src={ props.profile.photos.large != null ? props.profile.photos.large : dw} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <p>{ props.profile.aboutMe != null ? props.profile.aboutMe : 'Обо мне... пока ничего не написано ' }</p>
                <div className={s.searchWork}>
                    <p>Ищу работу:</p>
                    <img src={!props.profile.lookingForAJob ? off : on } />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
