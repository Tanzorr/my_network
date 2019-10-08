import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

class Profile extends Component {
    render(props) {

        return (
            <div>
                <div>
                    {/*<ProfileInfo />*/}
                    <MyPostsContainer />
                </div>
            </div>
        );
    }
}

export default Profile;