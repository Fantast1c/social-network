import React from "react";
import s from './Post.module.css'
import profilePhoto from '../../../../assets/images/profile.jpg'

export type PostPropsType = {
    message: string;
    likeCounts: number;
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src={profilePhoto} alt="avatar"/>
            <div>
                {props.message}
            </div>
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;