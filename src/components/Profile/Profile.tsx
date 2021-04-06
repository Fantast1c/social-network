import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

export type PostPropsType = {
    message: string;
    likeCounts: string;
}

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/08/2.jpg"/>
            </div>
            <div>
                avatar_desc
            </div>
            <MyPosts/>
        </div>

    );
}

export default Profile;