import s from './Users.module.css'
import  axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import {useEffect} from "react";

export type UsersPropsType = {
   users: Array<UserPropsType>
    //totalCount: 30,
   // error: null
    follow:(userId: number) => void
    unFollow:(userId: number) => void
    setUsers: (response: any) =>void
    totalUsersCount: number
    pageSize:number
    currentPage:number
    setCurrentPage: (p:any) => void
    setTotalUserCount:(response: any)=>void
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
    followed : boolean

}
const Users = (props:UsersPropsType) => {
 useEffect(()=>{
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
     .then(response =>{
         props.setUsers(response.data.items)
         props.setTotalUserCount(response.data.totalCount)});}, [])


        const onPageChanged =(pageNumber: number) =>{
            props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
                .then(response =>{ props.setUsers(response.data.items)});
        }

        let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
        pagesCount = pagesCount >20 ? pagesCount=20:pagesCount

        let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p) =>{
                    return <span className={props.currentPage=== p ? s.selectedPage: ""}
                    onClick={() =>{onPageChanged(p)}}>{p}</span>
                })
                }
            </div>
            {
                props.users.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small || userPhoto} alt="photo" className={s.photo}/>
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.followed ? <button onClick={()=>{props.unFollow(u.id)}}>unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>follow</button>}
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