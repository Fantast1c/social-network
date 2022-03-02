import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (pageNumber: number) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount:number) =>{
            dispatch(setTotalUserCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

