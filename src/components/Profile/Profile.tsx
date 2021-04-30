import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType ={
    profilePage: ProfilePageType
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} />
        </div>

    );
}

export default Profile;