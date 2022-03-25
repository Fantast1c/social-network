import {Dispatch} from "react";
import {authTC} from "./auth-reducer";

type initializedSuccessAT = {
    type: "INITIALIZED-SUCCESS"
}

type unionType = initializedSuccessAT

export type initType = {
    initialized:boolean
}

let initState:initType = {
        initialized: false
}

const appReducer = (state = initState, action: unionType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized:true
            }
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({type: "INITIALIZED-SUCCESS"})

export const initializeAppTC = () => (dispatch: Dispatch<any>) => {
        let promise = dispatch(authTC())

        Promise.all([promise])
            .then(()=>{
                dispatch(initializedSuccessAC())
            })

}

export default appReducer;