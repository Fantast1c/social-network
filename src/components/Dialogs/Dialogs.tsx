import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {MessagesPageType} from "../../redux/store";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {sendMessageAC, updateMessageBodyAC} from "../../redux/messages-reducer";

export type DialogsPropsType={
    updateMessageBody:(body:string)=> void,
    sendMessage:()=> void
    messagesPage: MessagesPageType

}

const Dialogs = (props:DialogsPropsType) => {

    let state = props.messagesPage

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
        dispatch(updateMessageBodyAC(data.message))
        dispatch(sendMessageAC())
        reset()
    } ;

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="message" placeholder="Enter your message" className={s.form_control}
            {...register("message", {required:true})}/>
        <input type="submit" className={s.button}/>
    </form>)}
export default Dialogs