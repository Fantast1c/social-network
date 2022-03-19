import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    getUsersTC, followTC, unFollowTC
} from "../../redux/users-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";


let AuthRedirectComponent = WithAuthRedirect(Users)

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },

        setUsers: (users:  any) => {
            dispatch(setUsersAC(users))
        },

        setTotalUserCount: (totalCount:number) =>{
            dispatch(setTotalUserCountAC(totalCount))
        },


        getUsersThunk: (currentPage:number, pageSize:number) =>{
        dispatch(getUsersTC(currentPage, pageSize))
    },

        followTC: (userId:number) =>{
            dispatch(followTC(userId))
        },
        unFollowTC: (userId:number) =>{
            dispatch(unFollowTC(userId))
        }

    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default UsersContainer
