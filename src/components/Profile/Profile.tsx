import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC, getUserProfileTC} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import {AppStoreType} from "../../redux/store";
import {InitStateType} from "../../redux/auth-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

const Profile = (props: any) => {

    const dispatch = useDispatch()
    let state = useSelector<AppStoreType, InitStateType>(state => state.auth)

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = state.id
        }
        dispatch(getStatusTC(userId))
        dispatch(getUserProfileTC(userId))
    }, [props.match.params.userId])

    let isOwner = (!props.match.params.userId)

    return (
        <div className={s.container}>
            <div className={s.profile}>
                <ProfileInfo isOwner = {isOwner}/>
                <MyPosts/>
            </div>
        </div>

    );
}

let  ProfileWithRouter = withRouter(Profile)
export default ProfileWithRouter


