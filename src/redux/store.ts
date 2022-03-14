import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

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

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStoreType = ReturnType<typeof reducers>

let store: Store = createStore(reducers);

export default store;