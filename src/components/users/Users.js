import React from 'react';
import img1 from './darth-vader.png';
import img2 from './princess-leia.png';
import img3 from './rick.png';
import style from './users.module.css';

let Users = (props) => {
    return <div>
        {
        props.users.map(u =>
            <div className={style.container} key={u.id}>

                <div className={style.item}>
                    <div className={style.avaItem}>
                        <img src={img1}/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>FOLLOW</button>
                            }
                        </div>
                    </div>
                    <div className={style.userInfo}>
                        <div className={style.nameUndStatus}>
                            <p>{u.name}</p>
                            <em>{u.textStatus}</em>
                        </div>
                        <div className={style.location}>
                            <p>{u.location.country}</p>
                            <p>{u.location.city}</p>
                        </div>
                    </div>
                </div>

            </div>
        )}
    </div>
}

export default Users;