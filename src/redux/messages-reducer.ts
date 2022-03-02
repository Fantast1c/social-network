const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    text: string
}

let initialState: InitStateType = {
    dialogs: [
        {id: 1, name: "Коля"},
        {id: 2, name: "Диана"},
        {id: 3, name: "Денчик"},
    ],
    messages: [
        {id: 1, text: "HI"},
        {id: 2, text: "Like"},
        {id: 3, text: "No problem"},
    ],
    newMessageBody: ""
}

type InitStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

const messagesReducer = (state: InitStateType = initialState, action: any): InitStateType => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body
            }


        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id:6, text: body}]
            }

        default:
            return state;
    }
}

export const sendMessageAC=()=>({type:"SEND-MESSAGE"})
export const updateMessageBodyAC=(body:string)=>({
    type:"UPDATE-NEW-MESSAGE-BODY", body: body
})

export default messagesReducer;