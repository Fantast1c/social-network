import React from "react";
import s from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/store";
import {InitStateType} from "../../../redux/profile-reducer";
import {Spinner} from "../../../assets/spinner/Spinner";
import profileImage from "../../../assets/images/noPhoto.jpg"

const ProfileInfo = () => {


    const state = useSelector<AppStoreType, InitStateType>(state => state.profilePage)



    return (<div className={s.profileInfo}>
            <div className={s.profileImg}>
                {state.profile.photos?.large ?
                    <img src={state.profile.photos?.large} alt='profilePhoto'/> :
                    <img src={profileImage} alt='profilePhoto'/>}
            </div>
            <div className={s.descriptionBlock}>
                <div>{state.profile.aboutMe}</div>
            </div>
        </div>


    );
}

export default ProfileInfo;