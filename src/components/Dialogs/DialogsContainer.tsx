import {sendMessageAC, updateMessageBodyAC} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

let mapStateToProps = (state: RootStateType)=>{
    return {
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action:any) => void)=>{
    return {
        updateMessageBody: (body:string)=>{dispatch(updateMessageBodyAC(body))},
        sendMessage: ()=>{dispatch(sendMessageAC())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;