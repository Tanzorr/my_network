import React, {Component} from 'react';
import s from './ProfoleImfo.module.css'
import Preloader from "../../comon/Prloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";


const ProfileInfo=(props)=>{
    if (!props.profile){
        return <Preloader/>
    }

    console.log("profInfo",props);
    return (
            <div className={s.item} >

                <div>
                    <img src="" alt=""/>
                </div>
                <div className={s.description}>
                    <img src={props.profile.photos.large} alt=""/>
                    <p>
                        <ProfileStatusWithHook status={props.status}  updateStatus = {props.updateStatus}/>
                        {props.profile.fullName}
                    </p>

                </div>
            </div>
        );

}

export default ProfileInfo;