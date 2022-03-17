import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setToggleIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    getUsersTC, followTC, unFollowTC
} from "../../redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)

