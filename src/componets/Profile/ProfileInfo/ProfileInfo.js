import React, {useState} from 'react';
import s from './ProfoleImfo.module.css'
import Preloader from "../../comon/Prloader/Preloader";
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";
import userPhoto  from "../../../assets/images/download.png";
import styles from "../../Users/users.module.css";
import  ProfileDataForm from "./ProfileDataForm";

const ProfileInfo=({profile,status,updateStatus,isOwner,savePhoto, saveProfile})=>{
    let [editMode,setEditMode]=useState(false);
    if (!profile){
        return <Preloader/>
    }
    console.log("profile",profile);

    const onMainPhotoSelected =(e)=>{
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit= async (formData)=>{
       await saveProfile(formData);
        setEditMode(false);
    };

    return (
            <div className={s.item} >
                <div className={s.description}>
                    <img src={profile.photos.large || userPhoto} className={styles.usersPhoto} alt=""/>
                    { editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />: <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    <ProfileStatusWithHook status={status}  updateStatus = {updateStatus}/>
                        {profile.fullName}
                </div>
            </div>
        );

};

const ProfileData =({profile,isOwner, goToEditMode})=>{
    return <div>
                    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
                <div>
                    <b>Full name</b>: {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b>: {profile.lookeingForAJob ? "yes":"no"}
                </div>
                {profile.lookingForAJob  &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>About me</b>: {profile.aboutMe}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key=>{
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue})=>{
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;