import React, {Component, Fragment} from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

class Profile extends Component {
    render(props) {
        console.log(MyPostsContainer);
        return (
            <Fragment>
                {/*<ProfileInfo />*/}
                <MyPostsContainer />
            </Fragment>
        );
    }
}

export default Profile;