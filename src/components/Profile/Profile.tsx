import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";





const Profile = () => {
    return (
       <div className={s.container}>
           <div className={s.profile}>
               <ProfileInfo/>
               <MyPostsContainer />
           </div>
       </div>

    );
}


// posts={props.profilePage.posts}
// newPostText ={props.profilePage.newPostText}
// dispatch={props.dispatch}
export default Profile;