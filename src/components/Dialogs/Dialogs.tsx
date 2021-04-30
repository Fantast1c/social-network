import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

export type DialogsPropsType={
    messagePage: MessagesPageType
}

const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.messagePage.dialogs.map((d)=><DialogItem name= {d.name} id={d.id}/>)
    let messagesElements = props.messagePage.messages.map(m => <Message text= {m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs