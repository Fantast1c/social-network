import React from "react";
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsPropsType ={
    posts: Array<PostPropsType>
}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map((p)=> <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>myPosts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button className={s.button} onClick={()=>{alert("Пост не добавляется :(")}}>add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    );
}

export default MyPosts;