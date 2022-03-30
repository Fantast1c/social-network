import s from './ProfileInfo.module.css'
import {AppStoreType} from "../../../redux/store";
import {InitStateType, savePhotoTC} from "../../../redux/profile-reducer";
import profileImage from "../../../assets/images/noPhoto.jpg"
import ProfileStatus from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent} from "react";

const ProfileInfo = (isOwner:any) => {
    let dispatch = useDispatch()
    const state = useSelector<AppStoreType, InitStateType>(state => state.profilePage)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement> ) =>{
        if(e.target?.files?.length){
            dispatch(savePhotoTC(e.target.files[0]))
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.profileImg}>
                {state.profile.photos?.large ?
                    <img src={state.profile.photos?.large} alt='profilePhoto'/> :
                    <img src={profileImage} alt='profilePhoto'/>}
            </div>
            {isOwner.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

            <ProfileStatus status = {state.status}/>
            <div className={s.descriptionBlock}>
                <div>{state.profile.aboutMe}</div>
            </div>
        </div>


    );
}

export default ProfileInfo;