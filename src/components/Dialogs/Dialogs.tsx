import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {AppStoreType} from "../../redux/store";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {InitStateType, sendMessageAC} from "../../redux/messages-reducer";





const Dialogs = () => {

    let state = useSelector<AppStoreType, InitStateType>(state=>state.messagesPage)

    let dialogsElements = state.dialogs.map((d: any) => <DialogItem name= {d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map((m: any) => <Message text= {m.text} key={m.id}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                    <AddMessageForm/>
            </div>
        </div>
    )
}

type Inputs ={
    message:string
}

const AddMessageForm = () =>{

    const dispatch = useDispatch()

    const {register, handleSubmit, reset} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(sendMessageAC(data.message))
        reset()
    } ;

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="message" placeholder="Enter your message" className={s.form_control}
            {...register("message", {required:true})}/>
        <input type="submit" className={s.button}/>
    </form>)}

export default Dialogs