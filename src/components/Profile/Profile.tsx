import React, {useEffect} from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useDispatch} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

const Profile = (props: any) => {

    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 18645
        }
        dispatch(getUserProfileTC(userId))
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