import React from 'react';
import s from './my-posts.module.css';
import Post from './post/post';

const MyPost = (props) => {
    let postsElements = props.posts
        .map( (el) => {
            return <Post message={el.message} likesCount={el.likesCount}/>
        });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
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