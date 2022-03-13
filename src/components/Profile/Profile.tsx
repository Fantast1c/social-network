import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {InitStateType, setUserProfileAC} from "../../redux/profile-reducer";



const Profile = (props:any) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        debugger
        let userId = props.match.params.userId
        if(!userId){userId=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response =>
                dispatch( setUserProfileAC(response.data)))},[])

    return (
       <div className={s.container}>
           <div className={s.profile}>
               <ProfileInfo />
               <MyPostsContainer />
           </div>
       </div>

    );
}


export default Profile;