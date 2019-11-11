import React, {Component} from 'react';
import s from './ProfoleImfo.module.css'
import Preloader from "../../comon/Prloader/Preloader";
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";


const ProfileInfo=({profile,status,updateStatus})=>{
    if (!profile){
        return <Preloader/>
    }

    return (
            <div className={s.item} >

                <div>
                    <img src="" alt=""/>
                </div>
                <div className={s.description}>
                    <img src={profile.photos.large} alt=""/>
                    <p>
                        <ProfileStatusWithHook status={status}  updateStatus = {updateStatus}/>
                        {profile.fullName}
                    </p>

                </div>
            </div>
        );

}

export default ProfileInfo;