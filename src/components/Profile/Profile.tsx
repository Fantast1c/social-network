import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC, getUserProfileTC, InitStateType, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {AppStoreType} from "../../redux/store";

const Profile = (props: any) => {

    const dispatch = useDispatch()
    useSelector<AppStoreType, InitStateType>(state=>state.profilePage)


    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 18645
        }
        dispatch(getUserProfileTC(userId))
        dispatch(getStatusTC(userId))

    }, [props.match.params.userId])

    return (
        <div className={s.container}>
            <div className={s.profile}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </div>

    );
}


export const ProfileWithRouter = withRouter(Profile);