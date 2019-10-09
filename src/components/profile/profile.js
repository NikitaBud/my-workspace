import React from 'react';
import './profile.css';
import MyPost from './my-posts/my-post';
import ProfileInfo from "./profile-info/propfile-info";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost
                state={props.state}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;