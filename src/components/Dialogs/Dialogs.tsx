import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/store-hand(legacy)";
import React from "react";

export type DialogsPropsType={
    updateMessageBody:(body:string)=> void,
    sendMessage:()=> void
    messagesPage: MessagesPageType
}

const Dialogs = (props:DialogsPropsType) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogs.map((d: any) => <DialogItem name= {d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m: any) => <Message text= {m.text}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = ()=>{props.sendMessage()}

    let onNewMessageChange = (e: any)=>{
       let body = e.target.value
        props.updateMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message" className="form-control" /></div>
                    <div><button className={s.button} onClick={onSendMessageClick}>send message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs