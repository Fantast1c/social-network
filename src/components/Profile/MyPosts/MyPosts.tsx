import React from "react";
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";


export type MyPostsPropsType = {
    addPost: (addPost: any) => void,
    updateNewPostText: (onPostChange: any) => void,
    posts: Array<PostPropsType>
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
        }

    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>myPosts</h3>
                <div>
                    <div><textarea className="form-control" onChange={onPostChange} ref={newPostElement}
                                   value={props.newPostText}/></div>
                    <div>
                        <button className={s.button} onClick={onAddPost}>add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    );
}
