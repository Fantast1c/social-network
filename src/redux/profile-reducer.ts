const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    newPostText: "NEW POST",
    posts: [
        {id: 1, likeCounts: 13, message: "First Post"},
        {id: 2, likeCounts: 144, message: "Second Post"},
        {id: 3, likeCounts: 3, message: "Third Posts"},
    ]
}

type InitStateType = typeof initialState

const profileReducer = (state: InitStateType = initialState, action: any):  InitStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                likeCounts: 0,
                message: state.newPostText
            }
           return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
           return  {...state,
               newPostText : action.newText
           }
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: "ADD-POST"})
export const updateNewPostTextAC = (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT", newText: text
})

export default profileReducer;