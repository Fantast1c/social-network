import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/noPhoto.jpg'
import {useEffect} from "react";
import {Spinner} from "../../assets/spinner/Spinner";
import {NavLink} from "react-router-dom";
import {follow, getUsers, unFollow} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {InitStateType, setToggleIsFetchingAC, ToggleFollowingProgressAC} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<UserPropsType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (response: any) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (p: any) => void
    setTotalUserCount: (response: any) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}
export type  UserPropsType = {
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

    const dispatch = useDispatch()
    let state = useSelector<AppStoreType, InitStateType>(state => state.usersPage)

    useEffect(() => {
        props.toggleIsFetching(true)
        getUsers(props.currentPage, props.pageSize)
            .then(data => setTimeout(() => {
                    props.toggleIsFetching(false)
                    props.setUsers(data.items)
                    props.setTotalUserCount(data.totalCount)
                }, 400)
            );
    }, [])


    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)
        getUsers(pageNumber, props.pageSize)
            .then(data => setTimeout(() => {
                props.toggleIsFetching(false)
                props.setUsers(data.items)
            }, 400));
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    pagesCount = pagesCount > 20 ? pagesCount = 20 : pagesCount

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div>
                {props.isFetching ? <Spinner/> : null}
            </div>
            <div>
                {pages.map((p) => {
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })
                }
            </div>
            {
                props.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}> <img src={u.photos.small || userPhoto} alt="photo"
                                                                   className={s.photo}/></NavLink>
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.followed ?
                                <button disabled={state.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    dispatch(ToggleFollowingProgressAC(true, u.id))
                                    unFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unFollow(u.id);
                                            }
                                            dispatch(ToggleFollowingProgressAC(false, u.id))
                                        });
                                }}>unfollow</button> :

                                <button disabled={state.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    dispatch(ToggleFollowingProgressAC(true, u.id))
                                    follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            dispatch(ToggleFollowingProgressAC(false,u.id))
                                        });
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users