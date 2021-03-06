import {authAPI, loginAPI, logoutAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_IS_AUTH = "SET-IS-AUTH"

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
        case SET_IS_AUTH:
            return {
                ...state, isAuth: state.isAuth=true
            }
        default:
            return state;
    }
}

export const setUserDataAC = (data:InitStateType) =>  ({type: SET_USER_DATA, data, isAuth:false})
export const setIsAuth = () =>({type:SET_IS_AUTH})

export const authTC = () => async (dispatch:any) =>{
    let response = await authAPI()
        if(response.resultCode===0) {
            let {id, email, login} = response.data
            dispatch(setUserDataAC({id, email, login, isAuth:true}))
        }
}
export const loginTC = (email: string, password:string, rememberMe:boolean) => async (dispatch:any) =>{
   let response = await loginAPI(email, password, rememberMe)
        if(response.data.resultCode===0) {
            dispatch(authTC())
        }
}

export const logoutTC = () => async (dispatch:any) =>{
   let response = await logoutAPI()
        if(response.data.resultCode===0) {
            dispatch(setUserDataAC({id:null, email: null, login: null, isAuth:false}))
        }
}



export default authReducer;