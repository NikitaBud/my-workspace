import React from 'react';
import s from './my-posts.module.css';
import Post from './post/post';

const MyPost = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let newPostText = props.newPostText;

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
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
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPost;