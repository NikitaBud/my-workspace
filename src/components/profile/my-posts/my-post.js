import React from 'react';
import s from './my-posts.module.css';
import Post from './post/post';
import AddPostReduxForm from "./add-post-form/add-post-form";

const MyPost = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addNewPost = (value) => {
        props.addPost(value.textPost);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost} />
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPost;
