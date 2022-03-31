import {useSelector} from "react-redux";
import {useState} from "react";
import {followTC, InitStateType, unFollowTC} from "../../redux/users-reducer";
import {AppStoreType} from "../../redux/store";
import User from "./User";


const FindUsersForm = () => {

    let state = useSelector<AppStoreType,InitStateType>(state => state.usersPage)

    let [value,setValue] = useState("")

    const filteredUsers = state.users.filter((u)=> u.name.toLowerCase().includes(value.toLowerCase()))



    const onFindChange = (event:React.FormEvent<HTMLInputElement>) =>{
        setValue(event.currentTarget.value)
    }
    return(
        <div>
            <input onChange={onFindChange}/>
            {
                filteredUsers.map((u) => <User followTC={followTC} unFollowTC={unFollowTC} user={u}/>)
            }
        </div>
    )
};

export default FindUsersForm;