import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/noPhoto.jpg'
import {useEffect} from "react";
import {Spinner} from "../../assets/spinner/Spinner";
import {NavLink} from "react-router-dom";

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
    useEffect(() => {
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,
            {withCredentials:true})
            .then(response => setTimeout(() => {
                    props.toggleIsFetching(false)
                    props.setUsers(response.data.items)
                    props.setTotalUserCount(response.data.totalCount)
                }, 400)
            );
    }, [])


    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`,
            {withCredentials:true})
            .then(response => setTimeout(() => {
                props.toggleIsFetching(false)
                props.setUsers(response.data.items)
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
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true,
                                                headers: {"API-KEY":"1fcd203f-113c-4b79-ac22-512b6e875c51"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id);
                                            }
                                        });



                                }}>unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {withCredentials: true,
                                            headers: {"API-KEY":"1fcd203f-113c-4b79-ac22-512b6e875c51"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
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