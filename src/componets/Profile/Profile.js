import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MyPostsContainer";


const Profile =(props)=>{

    return(
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostContainer/>
            </div>
        );
};

export default Profile;