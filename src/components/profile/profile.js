import React from 'react';
import './profile.css';
import ProfileInfo from "./profile-info/propfile-info";
import MyPostContainer from "./my-posts/my-post-container";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    );
};

export default Profile;