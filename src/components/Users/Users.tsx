import s from './Users.module.css'
import {useEffect} from "react";
import {Spinner} from "../../assets/spinner/Spinner";
import Paginator from "../../assets/paginator/Paginator";
import User from "./User";
import FindUsersForm from "./FindUsersForm";

export type UsersPropsType = {
    users: Array<UserType>
    setUsers: (response: any) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setTotalUserCount: (response: any) => void
    isFetching: boolean
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}
export type  UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null,
    },
    status: string | null,
    followed: boolean
}

const Users = (props: UsersPropsType) => {

    useEffect(() => {
        props.getUsersThunk(props.currentPage, props.pageSize)
    }, [])
    const onPageChanged = (pageNumber: number) => {
        props.getUsersThunk(pageNumber, props.pageSize)
    }

    return (
        <div className={s.users}>
            <div>
                {props.isFetching ? <Spinner/> : null}
            </div>
            <Paginator currentPage={props.currentPage} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={onPageChanged}/>
                       <FindUsersForm/>

        </div>
    )
}

export default Users