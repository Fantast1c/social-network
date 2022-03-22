import React from 'react';
import s from "./MyPosts.module.css";
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {stat} from "fs";
import {AppStoreType} from "../../../redux/store";
import {InitStateType} from "../../../redux/profile-reducer";

type Inputs = {
    message:string
}

const MyPostsForm = () => {
    const dispatch = useDispatch()
    let state = useSelector<AppStoreType, InitStateType>(state => state.profilePage)

    const {register, handleSubmit, reset} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input className={s.form_control} value={state.newPostText}
                        {...register("message",{required:true})}/></div>
            <div><input type="submit" className={s.button}  /></div>
        </form>
    );
};

export default MyPostsForm;