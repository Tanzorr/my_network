import React, {Component} from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    render(props) {
        console.log('prop posst', this.props);
        return (
            <div>
                <div>
                    <ProfileInfo/>
                    <MyPosts posts={this.props.state.posts} currentval={this.props.state.newPostText} dispatch={this.props.dispatch} updateNextPostText={this.props.updateNextPostText}/>
                </div>
            </div>
        );
    }
}

export default Profile;