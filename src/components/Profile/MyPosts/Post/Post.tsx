import React from "react";
import s from './Post.module.css'
import {PostPropsType} from "../../Profile";

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src="https://pokerus.ru/_ph/13/181306511.png" alt="avatar"/>
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