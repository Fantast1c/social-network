import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getStatusTC, updateStatusTC} from "../../../redux/profile-reducer";

const ProfileStatus = (props:any) => {
    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

   const onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setStatus(e.currentTarget.value)
       console.log(e.currentTarget.value)
   }
   useEffect(()=>{dispatch(updateStatusTC(status))},[editMode])

    return (
        <div>
            {editMode?
                <input onChange={onStatusChange } value={status}
                       autoFocus={true} onBlur={()=>setEditMode(false)}
                       type="text"/>
            :
                <span onDoubleClick={()=>setEditMode(true)}>{props.status || "no status"}</span>}
        </div>
    );
};

export default ProfileStatus;