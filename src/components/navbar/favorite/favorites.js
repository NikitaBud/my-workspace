import React from 'react';
import avaMaria from './princess-leia.png';
import avaRoman from './atronaut.png';
import avaJohn from './rick.png';
import s from './favorites.module.css';

const Favorites = () => {
    return (
        <div className={s.container}>
            <div className={s.friendsHead}>
                Friends
            </div>
            <div className={s.friendsItems}>
                <div className={s.friendsItem}>
                    <img src={avaMaria} alt="Maria" />
                    <p>Maria</p>
                </div>
                <div className={s.friendsItem}>
                    <img src={avaRoman} alt="Roman" />
                    <p>Roman</p>
                </div>
                <div className={s.friendsItem}>
                    <img src={avaJohn} alt="John" />
                    <p>John</p>
                </div>
            </div>
        </div>
    )
};

export default Favorites;