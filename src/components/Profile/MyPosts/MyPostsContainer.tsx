import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";


const mapStateToProps = (state: RootStateType)=>{
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch:  (action:any) => void)=>{
    return {
        updateNewPostText: (text:string) =>{dispatch(updateNewPostTextAC(text))},
        addPost: ()=>{dispatch(addPostAC())}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;