import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

class Profile extends Component {
    render(props) {
        console.log('prop posst', this.props);
        return (
            <div>
                <div>
                    <ProfileInfo />
                    <MyPostsContainer store={this.props.store}/>
                </div>
            </div>
        );
    }
}

export default Profile;