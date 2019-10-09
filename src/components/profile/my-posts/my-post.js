import React from 'react';
import s from './my-posts.module.css';
import Post from './post/post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPost = (props) => {
    let postsElements = props.state.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let newPostText = props.state.newPostText;

    let onPostChange = (event) => {
        let text = event.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={ onPostChange }
                        value={ newPostText }
                        placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPost;