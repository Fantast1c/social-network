import {loginAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

type LoginType = {
    id:null| number
    email:null|string
    login:null|string
    isAuth:boolean
}

let initialState:LoginType = {
        id:null,
        email:null,
        login:null,
        isAuth:false

}

export type InitStateType = typeof initialState

const authReducer = (state: InitStateType = initialState, action: any): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state;
    }
}

export const setUserDataAC = (data:InitStateType) => ({type: SET_USER_DATA, data})
export const authTC = () => (dispatch:any) =>{
    loginAPI().then(response =>{
        dispatch(setUserDataAC(response.data))

    })
}



export default authReducer;