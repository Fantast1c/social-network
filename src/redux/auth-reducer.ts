import {authAPI, loginAPI, logoutAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

export type LoginType = {
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
            }

        default:
            return state;
    }
}

export const setUserDataAC = (data:InitStateType) => ({type: SET_USER_DATA, data})
export const authTC = () => (dispatch:any) =>{
    authAPI().then(response =>{
        if(response.resultCode===0) {
            let {id, email, login} = response.data
            dispatch(setUserDataAC({id, email, login, isAuth:true}))
        }
    })
}

export const loginTC = (email: string, password:string, rememberMe:boolean) => (dispatch:any) =>{
    loginAPI(email, password, rememberMe).then(response =>{
        if(response.data.resultCode===0) {
            dispatch(authTC())
        }
    })
}

export const logoutTC = () => (dispatch:any) =>{
    logoutAPI().then(response =>{
        if(response.data.resultCode===0) {
            dispatch(setUserDataAC({id:null, email: null, login: null, isAuth:false}))
        }
    })
}



export default authReducer;