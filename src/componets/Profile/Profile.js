import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MyPostsContainer";
import Preloader from "../comon/prloader/Preloader";


const Profile =(props)=>{

    return(
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostContainer/>
            </div>
        );
};

export default Profile;