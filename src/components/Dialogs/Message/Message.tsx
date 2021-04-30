import s from './Message.module.css'

export type MessagePropsType = {
    text: string,
}


const Message = (props: MessagePropsType) => {
    return (

            <div className={s.message}>{props.text}</div>
    )
}

export default Message;