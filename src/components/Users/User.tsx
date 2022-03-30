import s from './Users.module.css'
import userPhoto from '../../assets/images/noPhoto.jpg'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {InitStateType,} from "../../redux/users-reducer";
import {UserType} from "./Users";

type UserPropsType = {
    user: UserType
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}

const User = (props: UserPropsType) => {

    let state = useSelector<AppStoreType, InitStateType>(state => state.usersPage)

    return (
        <div>
                    <span>
                    <NavLink to={'/profile/' + props.user.id}> <img src={props.user.photos.small || userPhoto}
                                                                    alt="defaultPhoto" className={s.photo}/></NavLink>
                    </span>
            <span>
                    <div>
                {props.user.followed ?
                    <button disabled={state.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unFollowTC(props.user.id)
                            }}>unfollow</button>
                    :
                    <button disabled={state.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.followTC(props.user.id)
                            }}>follow</button>}
                    </div>
                    </span>
            <span>
                    <div>{props.user.name}</div><div>{props.user.status}</div>
                    </span>
        </div>
    )
}

export default User