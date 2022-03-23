import React from 'react';
import s from "./MyPosts.module.css";
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type Inputs = {
    message:string
}

const MyPostsForm = () => {
    const dispatch = useDispatch()

    const {register, handleSubmit, reset} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(updateNewPostTextAC(data.message))
        dispatch(addPostAC())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input className={s.form_control}
                        {...register("message",{required:true})}/></div>
            <div><input type="submit" className={s.button}  /></div>
        </form>
    );
};

export default MyPostsForm;