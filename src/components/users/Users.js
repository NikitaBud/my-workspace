import React from 'react';
import img1 from './darth-vader.png';
import style from './users.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>
                                {p}
                            </span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div className={style.container} key={u.id}>

                        <div className={style.item}>
                            <div className={style.avaItem}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : img1} alt='ava'/>
                                </NavLink>
                                <div>
                                    {u.followed
                                        ? <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {props.getUnFollow(u.id)}
                                         }>UNFOLLOW</button>
                                        : <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {props.getFollow(u.id)}
                                         }>FOLLOW</button>
                                    }
                                </div>
                            </div>
                            <div className={style.userInfo}>
                                <div className={style.nameUndStatus}>
                                    <p>{u.name}</p>
                                    <em>{u.textStatus}</em>
                                </div>
                                <div className={style.location}>
                                    <p>{'u.location.country'}</p>
                                    <p>{'u.location.city'}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )

}

export default Users;
