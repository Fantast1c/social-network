import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                myPosts
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
            </div>
            <Post message ="First Post" likeCounts = "3"/>
            <Post message ="Second Post" likeCounts = "0"/>
            <Post message ="Third Post" likeCounts = "5"/>
        </div>

    );
}

export default MyPosts;