import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div className={s.profileInfo}>
            <div className={s.profileImg}>
                <img src="https://pokerus.ru/_ph/13/181306511.png"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar+desc
            </div>
        </div>


    );
}

export default ProfileInfo;