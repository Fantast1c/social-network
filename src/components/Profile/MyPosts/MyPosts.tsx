import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/store";
import {InitStateType} from "../../../redux/profile-reducer";

export const MyPosts = () => {

    let state = useSelector<AppStoreType, InitStateType>(state => state.profilePage)

    let postsElements = state.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>myPosts</h3>
                <MyPostsForm/>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    );
}

export default MyPosts