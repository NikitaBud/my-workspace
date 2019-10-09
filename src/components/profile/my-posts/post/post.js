import React from 'react';

import s from './post.module.css';
import like from './thumbs-up.png';
import ava from './ava.jpg';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={ava} alt="ava" />
            <p>{props.message}</p>
            <div className={s.likeItem}>
                <img src={ like } alt="like" />
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;