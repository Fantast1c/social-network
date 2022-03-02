import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

export type PostType = {
    message: string;
    likeCounts: number;
    id: number;
}
export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    text: string
}
export type MessagesPageType = {
    newMessageBody: string,
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}
export type RootStateType = {

    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}

let storeHandLegacy = {
    _state: {
        profilePage: {
            newPostText: "NEW POST",
            posts: [
                {id: 1, likeCounts: 13, message: "First Post"},
                {id: 2, likeCounts: 144, message: "Second Post"},
                {id: 3, likeCounts: 3, message: "Third Posts"},
            ]
        },
        messagesPage: {
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
        },
        //sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._callSubscriber();
    }
}

 export default storeHandLegacy;
