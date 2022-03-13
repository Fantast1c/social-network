import {UserPropsType} from "../components/Users/Users";

export type  UsersPropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
let initialState:UsersPropsType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

 type InitStateType = typeof initialState

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
            return { ...state,users: action.users}

        }
        case "SET-CURRENT-PAGE": {
            return { ...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USER-COUNT": {
            return { ...state, totalUsersCount: action.count}
        }
        case "SET-TOGGLE-IS-FETCHING": {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: string) => ({type: "SET-USERS", users})
export const setCurrentPageAC = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage})
export const setTotalUserCountAC = (totalUsersCount:number) => ({type: "SET-TOTAL-USER-COUNT", count: totalUsersCount})
export const setToggleIsFetchingAC = (isFetching:boolean) => ({type: "SET-TOGGLE-IS-FETCHING", isFetching})


export default usersReducer;