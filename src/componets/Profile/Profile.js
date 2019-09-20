import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    <ProfileInfo/>
                    <MyPosts/>
                </div>
            </div>
        );
    }
}

export default Profile;