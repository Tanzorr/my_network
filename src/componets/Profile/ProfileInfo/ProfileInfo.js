import React, {Component} from 'react';
import s from './ProfoleImfo.module.css'
import Preloader from "../../comon/prloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo=(props)=>{
    if (!props.profile){
        return <Preloader/>
    }
    return (
            <div className={s.item} >

                <div>
                    <img src="" alt=""/>
                </div>
                <div className={s.description}>
                    <img src={props.profile.photos.large} alt=""/>
                    <p>
                        <ProfileStatus status={"Hello"} />
                        {props.profile.fullName}
                    </p>

                </div>
            </div>
        );

}

export default ProfileInfo;