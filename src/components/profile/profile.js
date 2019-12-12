import React from 'react';
import './profile.css';
import ProfileInfo from "./profile-info/profile-info";
import MyPostContainer from "./my-posts/my-post-container";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostContainer profile={props.profile} />
        </div>
    );
};

export default Profile;
