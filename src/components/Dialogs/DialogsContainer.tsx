import {sendMessageAC, updateMessageBodyAC} from "../../redux/messages-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/store";


let mapStateToProps = (state: AppStoreType)=>{
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: (action:any) => void)=>{
    return {
        updateMessageBody: (body:string)=>{dispatch(updateMessageBodyAC(body))},
        sendMessage: ()=>{dispatch(sendMessageAC())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;