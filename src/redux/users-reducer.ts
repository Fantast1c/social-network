import {UserPropsType} from "../components/Users/Users";
import {followAPI, getUsersAPI, unFollowAPI} from "../api/api";

export type  UsersPropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
let initialState: UsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type InitStateType = typeof initialState

const usersReducer = (state: UsersPropsType = initialState, action: any): UsersPropsType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USER-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "SET-TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: string) => ({type: "SET-USERS", users})
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage})
export const setTotalUserCountAC = (totalUsersCount: number) => ({type: "SET-TOTAL-USER-COUNT", count: totalUsersCount})
export const setToggleIsFetchingAC = (isFetching: boolean) => ({type: "SET-TOGGLE-IS-FETCHING", isFetching})
export const ToggleFollowingProgressAC = (isFetching: boolean, id: number) => ({type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, id})

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setToggleIsFetchingAC(true))
    let data = await getUsersAPI(currentPage, pageSize)
    dispatch(setToggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUserCountAC(data.totalCount))
    dispatch(setCurrentPageAC(currentPage))
}

export const followTC = (userId: number) => async (dispatch: any) => {
    dispatch(ToggleFollowingProgressAC(true, userId))
    let data = await followAPI(userId)
    if (data.resultCode === 0) {
        dispatch(followAC(userId))
    }
    dispatch(ToggleFollowingProgressAC(false, userId))
}

export const unFollowTC = (userId: number) => async (dispatch: any) => {
    dispatch(ToggleFollowingProgressAC(true, userId))
    let data = await unFollowAPI(userId)
    if (data.resultCode === 0) {
        dispatch(unFollowAC(userId))
    }
    dispatch(ToggleFollowingProgressAC(false, userId))
}

export default usersReducer;