import React from "react";
import s from './ProfileInfo.module.css'
import profilePhoto from '../../../assets/images/profile.jpg'

const ProfileInfo = () => {
    return (<div className={s.profileInfo}>
            <div className={s.profileImg}>
                <img src={profilePhoto} alt='profilePhoto'/>
            </div>
            <div className={s.descriptionBlock}>
                avatar+desc
            </div>
        </div>


    );
}

export default ProfileInfo;