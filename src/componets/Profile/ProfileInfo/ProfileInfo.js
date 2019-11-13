import React, {Component} from 'react';
import s from './ProfoleImfo.module.css'
import Preloader from "../../comon/Prloader/Preloader";
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";
import userPhoto  from "../../../assets/images/download.png";
import styles from "../../Users/users.module.css";

const ProfileInfo=({profile,status,updateStatus,isOwner,savePhoto})=>{
    if (!profile){
        return <Preloader/>
    }
    console.log("profile",userPhoto);

    const onMainPhotoSelected =(e)=>{
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
            <div className={s.item} >
                <div className={s.description}>
                    <img src={profile.photos.large || userPhoto} className={styles.usersPhoto} alt=""/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                        <ProfileStatusWithHook status={status}  updateStatus = {updateStatus}/>
                        {profile.fullName}


                </div>
            </div>
        );

}

export default ProfileInfo;