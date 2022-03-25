const SEND_MESSAGE = "SEND-MESSAGE"

export type sendMessageAT = {
    type:"SEND-MESSAGE"
    newMessageBody:string
}

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
    ]
}

export type InitStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const messagesReducer = (state: InitStateType = initialState, action: any): InitStateType => {

    switch (action.type){

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id:6, text: body}]
            }

        default:
            return state;
    }
}

export const sendMessageAC=(body:string)=>({type:"SEND-MESSAGE", newMessageBody:body})


export default messagesReducer;