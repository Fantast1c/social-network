import messagesReducer, {InitStateType, sendMessageAC} from "./messages-reducer";


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

test("length of messages should be incremented", ()=>{
    let action = sendMessageAC("new message")
    let newState = messagesReducer(initialState, action)

    expect(newState.messages.length).toBe(4)
})

