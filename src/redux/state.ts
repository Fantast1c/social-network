export type PostType = {
    message: string;
    likeCounts: number;
}

export type ProfilePageType = {
    posts: Array<PostType>
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
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {likeCounts: 13, message: "First Post"},
            {likeCounts: 144, message: "Second Post"},
            {likeCounts: 3, message: "Third Posts"},
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
        ]
    }
}

export default state;