import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {InitStateType, setUserProfileAC} from "../../redux/profile-reducer";





const Profile = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppStoreType, InitStateType>(state => state.profilePage)

    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2}`)
            .then(response =>
                dispatch( setUserProfileAC(response.data)))},[])

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