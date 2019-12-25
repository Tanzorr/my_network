import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MyPostsContainer";


const Profile =(props)=>{
        console.log("owner", props);
    return(
            <div>
                <ProfileInfo isOwner={props.isOwner}
                             profile={props.profile}
                             status={props.status}
                             saveProfile={props.saveProfile}
                             updateStatus={props.updateStatus}
                             savePhoto={props.savePhoto}
                />

            </div>
        );
};

export default Profile;