import React from 'react';
import './profile.css';
import foto from './foto.jpg';
import MyPost from './my-posts/my-post';
import ProfileInfo from "./profile-info/propfile-info";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost
                posts={props.state.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;