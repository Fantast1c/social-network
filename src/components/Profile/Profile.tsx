import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC, getUserProfileTC, InitStateType} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {AppStoreType} from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props: any) => {

    const dispatch = useDispatch()
    //let state = useSelector<AppStoreType, InitStateType>(state=>state.profilePage)


    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 18645
        }
        dispatch(getStatusTC(userId))
        dispatch(getUserProfileTC(userId))


    }, [props.match.params.userId])

    return (
        <div className={s.container}>
            <div className={s.profile}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>

    );
}


export const ProfileWithRouter = withRouter(Profile);