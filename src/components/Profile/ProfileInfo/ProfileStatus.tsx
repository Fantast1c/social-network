import React, {useState} from 'react';

const ProfileStatus = (props:any) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {editMode?
                <input autoFocus={true} onBlur={()=> setEditMode(false)} type="text" value={props.status} />
            :
                <span onDoubleClick={()=>setEditMode(true)}>{props.status}</span>}
        </div>
    );
};

export default ProfileStatus;