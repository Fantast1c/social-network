import {getProfileAPI, getStatusAPI, updateStatusAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"



type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: { small: string, large: string }
}

let initialState = {
    posts: [
        {id: 1, likeCounts: 13, message: "First Post"},
        {id: 2, likeCounts: 144, message: "Second Post"},
        {id: 3, likeCounts: 3, message: "Third Posts"},
    ],
    profile: null || {} as ProfileType,
    status: null || ""
}

export type InitStateType = typeof initialState
const profileReducer = (state: InitStateType = initialState, action: any): InitStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                likeCounts: 0,
                message: action.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostAC = (message:string) => ({type: "ADD-POST", newText:message})
export const setUserProfileAC = (profile: any) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status: any) => ({type: SET_STATUS, status})

export const getUserProfileTC = (userId: number) => async (dispatch: any) => {
    let response = await getProfileAPI(userId)
            dispatch(setUserProfileAC(response.data))
}
export const getStatusTC = (userId: number) => async (dispatch: any) => {
    let response = await getStatusAPI(userId)
        dispatch(setStatusAC(response.data))
}
export const updateStatusTC = (status: any) => async (dispatch: any) => {
    let response = await updateStatusAPI(status)
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
}

export default profileReducer;